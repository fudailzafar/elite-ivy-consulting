"use client";
import MagneticButton from "@/components/MagneticButton";
import { useState, useRef, useEffect } from "react";

// SVG icons in brand brass (#A8823C)
const ICONS = [
  <svg key="01" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="20" height="14" rx="2.5" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M2 15l4.5 5h11l4.5-5" stroke="#A8823C" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8 10h8M8 13h5" stroke="#A8823C" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="02" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="10" r="4.5" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M5 25c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#A8823C" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="03" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M4 7h14M4 12h10M4 17h6" stroke="#A8823C" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="21" cy="19" r="4.5" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M24 22.5l2.5 2.5" stroke="#A8823C" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="04" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M5 25V5a2 2 0 012-2h10l6 6v16a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M17 3v6h6" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M10 16l2.5 2.5 5.5-5.5" stroke="#A8823C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="05" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="22" height="16" rx="2" stroke="#A8823C" strokeWidth="1.8"/>
    <path d="M3 12h22" stroke="#A8823C" strokeWidth="1.8"/>
    <circle cx="9" cy="18" r="1.8" stroke="#A8823C" strokeWidth="1.4"/>
    <path d="M14 17h7M14 20h4" stroke="#A8823C" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  <svg key="06" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3l2.2 7H23l-5.8 4.2 2.2 6.8L14 17l-5.4 4L11 14.2 5.2 10H12L14 3z" stroke="#A8823C" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>,
];

const stages = [
  {
    num: "01",
    title: "Profile Evaluation & Career Mapping",
    duration: "2 — 3 Weeks",
    description:
      "We benchmark your transcripts against historical admission thresholds and map out university tier pathways that match your true academic profile.",
  },
  {
    num: "02",
    title: "University Shortlist & Course Counseling",
    duration: "3 — 4 Weeks",
    description:
      "A bespoke 12-university matrix balancing aspirational reach, target, and safety choices — each justified with acceptance rate data.",
  },
  {
    num: "03",
    title: "Document Coaching — SOPs, LORs, CVs",
    duration: "4 — 6 Weeks",
    description:
      "Line-by-line editorial feedback and narrative positioning to let your authentic voice meet Ivy League and Russell Group expectations.",
  },
  {
    num: "04",
    title: "Application Submission & Tracking",
    duration: "Ongoing (Sept — Jan)",
    description:
      "A comprehensive pre-submission audit across UCAS, Common App, and OUAC portals — protecting against administrative errors.",
  },
  {
    num: "05",
    title: "Visa Guidance & Mock Interview Prep",
    duration: "2 — 3 Weeks",
    description:
      "We review visa dossiers under current UKVI/SEVIS codes and run tailored mock interviews, maintaining a 100% visa approval rate.",
  },
  {
    num: "06",
    title: "Standardized Test Prep Strategies",
    duration: "Diagnostic Phase",
    description:
      "A full-length SAT/ACT or IELTS/TOEFL diagnostic pinpoints exact weak points, letting you invest test-prep resources with surgical precision.",
  },
];

const GAP = 24;     // px gap between cards

export default function Admissions() {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setVisibleCount(isMobile ? 1 : 3);
      setOffset((prev) => Math.min(prev, Math.max(0, stages.length - (isMobile ? 1 : 3))));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const MAX_OFFSET = Math.max(0, stages.length - visibleCount);

  // Measure the clipping viewport so we compute exact pixel shift
  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.offsetWidth;
      // card width = (container - total gap between visible cards) / visible count
      setCardWidth((vw - (visibleCount - 1) * GAP) / visibleCount);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [visibleCount]);

  // Each step moves exactly one card width + one gap
  const shift = offset * (cardWidth + GAP);

  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">

          {/* ── Header row: kicker + title + description left; arrows flush right ── */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span className="kicker">Our Methodology</span>
              <h1
                className="font-display"
                style={{ marginBottom: "14px" }}
              >
                The Six-Stage Advisory Process
              </h1>
              <p className="section-desc">
                A transparent, timeline-driven process. We mentor students to reflect, edit,
                and submit with precision — never ghostwriting on their behalf.
              </p>
            </div>

            {/* Arrows — far right, vertically aligned to bottom of header block */}
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, paddingBottom: "4px" }}>
              {/* Left arrow */}
              <button
                onClick={() => setOffset((p) => Math.max(p - 1, 0))}
                disabled={offset === 0}
                aria-label="Previous stage"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: `1px solid ${offset === 0 ? "rgba(14,51,49,0.2)" : "#0E3331"}`,
                  color: offset === 0 ? "rgba(14,51,49,0.25)" : "#0E3331",
                  background: "transparent",
                  cursor: offset === 0 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 450ms cubic-bezier(0.22,1,0.36,1), color 450ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Right arrow */}
              <button
                onClick={() => setOffset((p) => Math.min(p + 1, MAX_OFFSET))}
                disabled={offset === MAX_OFFSET}
                aria-label="Next stage"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: `1px solid ${offset === MAX_OFFSET ? "rgba(14,51,49,0.2)" : "#0E3331"}`,
                  color: offset === MAX_OFFSET ? "rgba(14,51,49,0.25)" : "#0E3331",
                  background: "transparent",
                  cursor: offset === MAX_OFFSET ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 450ms cubic-bezier(0.22,1,0.36,1), color 450ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Carousel viewport — overflow hidden clips cards outside view ── */}
          <div ref={viewportRef} style={{ overflow: "hidden" }}>
            {/* Track — all 6 cards in a flex row, translated by exact px */}
            <div
              style={{
                display: "flex",
                gap: `${GAP}px`,
                transform: `translateX(-${shift}px)`,
                transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform",
              }}
            >
              {stages.map((stage, i) => (
                <div
                  key={stage.num}
                  style={{
                    // Shrink to exact measured pixel width so math is always correct
                    flex: `0 0 ${cardWidth > 0 ? `${cardWidth}px` : `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`}`,
                    // parchment card bg from design system; brass top border (like process-card)
                    background: "#FAF7F0",
                    borderTop: "2px solid #A8823C",
                    borderRadius: "4px",
                    padding: "28px 24px 32px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Icon — brass stroke */}
                  <div style={{ marginBottom: "16px" }}>{ICONS[i]}</div>

                  {/* Number — uses .section-marker colour (#A8823C brass) */}
                  <span className="section-marker" style={{ fontSize: "14px", marginBottom: "8px" }}>
                    {stage.num}
                  </span>

                  {/* Hairline divider — .brass-divider */}
                  <hr className="brass-divider" style={{ marginBottom: "16px", opacity: 0.35 }} />

                  {/* Title — font-display, ink colour */}
                  <h3
                    className="font-display"
                    style={{ fontSize: "17px", fontWeight: 600, color: "#0E3331", marginBottom: "10px", lineHeight: 1.35 }}
                  >
                    {stage.title}
                  </h3>

                  {/* Duration — accent terracotta, kicker style */}
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#C1572C",
                      marginBottom: "12px",
                    }}
                  >
                    {stage.duration}
                  </span>

                  {/* Description — body colour, muted */}
                  <p style={{ fontSize: "14px", color: "#18181C", opacity: 0.72, lineHeight: 1.65, margin: 0 }}>
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Animated pill progress dots ── */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
            {Array.from({ length: MAX_OFFSET + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setOffset(i)}
                aria-label={`Go to position ${i + 1}`}
                style={{
                  width: i === offset ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === offset ? "#A8823C" : "rgba(168,130,60,0.28)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 300ms cubic-bezier(0.22,1,0.36,1), background 300ms",
                }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
           TEST PREPARATION SECTION
          ════════════════════════════════════════ */}
      <section id="test-prep" className="section-padding" style={{ background: "#E7DCC8" }}>
        <div className="container">
          {/* Header */}
          <div style={{ maxWidth: "640px", marginBottom: "56px" }}>
            <span className="kicker">Test Preparation</span>
            <h2
              className="font-display"
              style={{ marginBottom: "16px" }}
            >
              Exam Preparation, Covered End-to-End
            </h2>
            <p className="section-desc">
              With Elite Ivy, you never face a standardised test alone. We partner you with
              specialist tutors, diagnostics, and structured study plans — so every exam
              becomes a stepping stone, not a stumbling block.
            </p>
          </div>

          {/* 4 × 2 exam card grid */}
          <div className="grid-4">
            {[
              { name: "IELTS",     desc: "International English Language Testing System — required for UK, Australia & Canada university entry." },
              { name: "TOEFL",     desc: "Test of English as a Foreign Language — the global benchmark for U.S. and graduate admissions." },
              { name: "GMAT",      desc: "Graduate Management Admission Test — the standard for MBA and business school applicants worldwide." },
              { name: "GRE",       desc: "Graduate Record Examination — accepted by thousands of graduate and professional programs globally." },
              { name: "AP Exams",  desc: "Advanced Placement exams — earn university credit while still in high school and strengthen your application." },
              { name: "SAT",       desc: "Scholastic Assessment Test — the primary undergraduate admissions test for U.S. colleges and universities." },
              { name: "NOTA",      desc: "Specialist entrance assessment coaching tailored to regional admission requirements and benchmarks." },
              { name: "NEET",      desc: "National Eligibility cum Entrance Test — gateway to undergraduate medical and dental programs in India." },
            ].map((exam) => (
              <div
                key={exam.name}
                style={{
                  background: "#FAF7F0",
                  borderTop: "2px solid #A8823C",
                  borderRadius: "4px",
                  padding: "24px 20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "#0E3331" }}>
                  {exam.name}
                </span>
                <hr className="brass-divider" style={{ opacity: 0.3 }} />
                <p style={{ fontSize: "14px", color: "#18181C", opacity: 0.72, lineHeight: 1.6, margin: 0 }}>
                  {exam.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           PRO BONO SECTION
          ════════════════════════════════════════ */}
      <section id="pro-bono" className="section-padding" style={{ background: "#E7DCC8" }}>
        <div className="container">

          {/* Outer bordered card */}
          <div
            style={{
              background: "#FAF7F0",
              border: "1px solid #A8823C",
              borderRadius: "8px",
              padding: "clamp(32px, 5vw, 64px)",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: "48px", maxWidth: "640px" }}>
              <span className="kicker">Pro Bono</span>
              <h2
                className="font-display"
                style={{ marginBottom: "16px" }}
              >
                Because Talent Has No Postcode
              </h2>
              <p className="section-desc">
                At Elite Ivy, we believe every talented student deserves a shot at world-class
                education — not just those who can afford it. Each year, we reserve a portion
                of our time to mentor exceptional students from disadvantaged backgrounds,
                completely free of charge.
              </p>
            </div>

            {/* Top row: Who it's for + What we offer — 2 columns */}
            <div className="grid-2" style={{ marginBottom: "48px" }}>

              {/* Who it's for */}
              <div>
                <h3
                  className="font-display"
                  style={{ fontSize: "18px", fontWeight: 600, color: "#0E3331", marginBottom: "20px", borderBottom: "1px solid rgba(168,130,60,0.35)", paddingBottom: "12px" }}
                >
                  Who It&rsquo;s For
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Students from low-income or underprivileged backgrounds",
                    "Outstanding academic record or demonstrated personal resilience",
                    "Applying for U.S. undergraduate or graduate programs",
                    "Lack access to quality admissions guidance",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#18181C", lineHeight: 1.55 }}>
                      <span style={{ color: "#A8823C", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we offer */}
              <div>
                <h3
                  className="font-display"
                  style={{ fontSize: "18px", fontWeight: 600, color: "#0E3331", marginBottom: "20px", borderBottom: "1px solid rgba(168,130,60,0.35)", paddingBottom: "12px" }}
                >
                  What We Offer
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Strategic school selection",
                    "Essay guidance & editing",
                    "Resume review",
                    "Application filing support",
                    "Scholarship & financial aid guidance",
                    "Interview prep — college & visa",
                    "Post-admission guidance",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#18181C", lineHeight: 1.55 }}>
                      <span style={{ color: "#A8823C", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Brass divider */}
            <hr className="brass-divider" style={{ marginBottom: "40px", opacity: 0.35 }} />

            {/* Bottom row: How to apply — full width */}
            <div>
              <h3
                className="font-display"
                style={{ fontSize: "18px", fontWeight: 600, color: "#0E3331", marginBottom: "20px" }}
              >
                How to Apply
              </h3>

              {/* Steps + email in a two-col layout on desktop */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", flex: "1 1 320px" }}>
                  {[
                    "Submit a short application — academic records + personal background",
                    "Provide a statement of need & intent",
                    'Show strong motivation and commitment',
                    'Email us with the subject line \"Pro Bono Request\"',
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", fontSize: "15px", color: "#18181C", lineHeight: 1.55 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#A8823C",
                          color: "#FAF7F0",
                          fontSize: "11px",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Contact card */}
                <div
                  style={{
                    flex: "1 1 260px",
                    borderTop: "2px solid #A8823C",
                    paddingTop: "20px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#A8823C",
                      marginBottom: "8px",
                    }}
                  >
                    Reach Us Directly
                  </span>
                  <a
                    href="mailto:admissions@eliteivy.com?subject=Pro%20Bono%20Request"
                    style={{
                      display: "block",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "#0E3331",
                      textDecoration: "none",
                      marginBottom: "6px",
                      transition: "color 450ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#C1572C")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#0E3331")}
                  >
                    admissions@eliteivy.com
                  </a>
                  <span style={{ fontSize: "13px", color: "#18181C", opacity: 0.6 }}>
                    Subject line: &ldquo;Pro Bono Request&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
