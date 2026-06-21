import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import TestimonialVideo from "@/components/TestimonialVideo";
import HeroCarousel from "@/components/HeroCarousel";

const UNIVERSITIES = [
  "Columbia University",
  "Harvard University",
  "Stanford University",
  "Yale University",
  "Princeton University",
  "University of Pennsylvania",
  "Brown University",
  "Dartmouth College",
  "Cornell University",
  "MIT",
  "University of Oxford",
  "University of Cambridge",
  "London School of Economics",
  "Imperial College London",
  "University College London",
  "University of Toronto",
  "McGill University",
  "University of British Columbia"
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-padding relative bg-bg min-h-[85vh] flex items-center">
        <div className="architectural-lines"></div>
        <div className="container relative z-[2]">
          <div className="asymmetric-grid items-center">
            <div>
              <span className="kicker animate-mask-reveal">Dubai · UG &amp; PG Admissions Counseling</span>
              <h1 className="font-display animate-mask-reveal mb-8">
                #1 Rated Study Abroad Consultants in Dubai for Top Global University Admissions
              </h1>
              <p className="section-desc mb-12">
                Placing students from Dubai, Sharjah, and Abu Dhabi at MIT, Harvard, Stanford, Cornell, Caltech, and Carnegie Mellon.
              </p>
              <div className="flex gap-3 sm:gap-6 w-full sm:w-auto">
                <MagneticButton href="/contact" className="btn btn-primary flex-1 sm:flex-none !px-2 !py-3 sm:!px-8 sm:!py-4 !text-[11px] sm:!text-[14px] leading-tight flex justify-center text-center items-center">
                  Book a Consultation
                </MagneticButton>
                <MagneticButton href="#results" className="btn btn-secondary flex-1 sm:flex-none !px-2 !py-3 sm:!px-8 sm:!py-4 !text-[11px] sm:!text-[14px] leading-tight flex justify-center text-center items-center">
                  See Student Placements
                </MagneticButton>
              </div>
            </div>

            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* University Marquee Strip */}
      <div className="bg-ink text-bg py-8 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {UNIVERSITIES.map((uni, idx) => (
              <span key={`t1-${idx}`} className="flex items-center gap-12">
                <span className="marquee-item">{uni}</span>
                <span className="marquee-separator">·</span>
              </span>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {UNIVERSITIES.map((uni, idx) => (
              <span key={`t2-${idx}`} className="flex items-center gap-12">
                <span className="marquee-item">{uni}</span>
                <span className="marquee-separator">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Results Strip */}
      <section id="results" className="section-padding relative">
        <div className="container">
          <span className="kicker">Track Record</span>
          <div className="mb-16">
            <h2 className="font-display text-ink">
              Proven academic placement records.
            </h2>
          </div>

          {/* Statistics Grid */}
          <div className="grid-4 mb-24">
            <div className="stat-card">
              <div className="stat-metric-wrapper">
                <span className="font-display font-bold text-accent text-[42px] leading-none">92%</span>
              </div>
              <h3 className="font-display text-ink text-[18px] mb-4">Top 3 Admission Rate</h3>
              <p className="text-[14px]">Of our advising cohort secure offers at one of their top three target universities.</p>
            </div>
            <div className="stat-card">
              <div className="stat-metric-wrapper">
                <span className="font-display font-bold text-accent text-[42px] leading-none">100+</span>
              </div>
              <h3 className="font-display text-ink text-[18px] mb-4">Placed Globally</h3>
              <p className="text-[14px]">Undergraduate and postgraduate candidates successfully guided into competitive systems since 2019.</p>
            </div>
            <div className="stat-card">
              <div className="stat-metric-wrapper">
                <span className="font-display font-bold text-accent text-[42px] leading-none">10+</span>
              </div>
              <h3 className="font-display text-ink text-[18px] mb-4">Years of Experience</h3>
              <p className="text-[14px]">Specialized admissions counseling tailored specifically for Dubai/GCC high school curriculums.</p>
            </div>
            <div className="stat-card">
              <div className="stat-metric-wrapper">
                <span className="font-display font-bold text-accent text-[20px] leading-[1.2]">MIT, Harvard, Stanford</span>
              </div>
              <h3 className="font-display text-ink text-[18px] mb-4">Proven Placements</h3>
              <p className="text-[14px]">Direct admissions secured at world-leading Ivy League and Tier 1 research institutions.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="brass-divider"></div></div>

      {/* Destinations Preview */}
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Destinations</span>
          <h2 className="font-display text-ink mb-16">
            Study Destination Analysis
          </h2>
          <div className="grid-4" style={{ marginBottom: "96px", alignItems: "stretch" }}>
            {/* 01: Content Top, Image Bottom (UK) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="gulf-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column", borderTop: "none", borderBottom: "1px solid rgba(168,130,60,0.3)" }}>
                <span className="section-marker">01</span>
                <h3 className="font-display text-ink text-[24px] my-2 mb-4">United Kingdom</h3>
                <p className="text-[15px] mb-6">
                  Focusing on Russell Group institutions. Specialist guidance on UCAS essays, LNAT/UCAT entry assessments, and post-study Graduate Route visas.
                </p>
                <Link href="/destinations/uk" className="text-[13px] font-semibold uppercase text-accent no-underline">
                  Explore UK Details <span className="nudge-icon">→</span>
                </Link>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 02: Alternating Layout (Image Top on Desktop) */}
            <div className="flex flex-col md:flex-col-reverse" style={{ gap: "24px" }}>
              <div className="gulf-card border-b border-[rgba(168,130,60,0.3)] md:border-b-0 md:border-t" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <span className="section-marker">02</span>
                <h3 className="font-display text-ink text-[24px] my-2 mb-4">United States</h3>
                <p className="text-[15px] mb-6">
                  Targeting Ivy League and major research universities. Strategies for Common App personal statements, ACT/SAT testing, and STEM OPT extensions.
                </p>
                <Link href="/destinations/usa" className="text-[13px] font-semibold uppercase text-accent no-underline">
                  Explore US Details <span className="nudge-icon">→</span>
                </Link>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 03: Content Top, Image Bottom (Canada) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="gulf-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column", borderTop: "none", borderBottom: "1px solid rgba(168,130,60,0.3)" }}>
                <span className="section-marker">03</span>
                <h3 className="font-display text-ink text-[24px] my-2 mb-4">Canada</h3>
                <p className="text-[15px] mb-6">
                  Advising on top programs at Toronto, UBC, and McGill. Guidance on integrated industry co-op placements and PGWP post-graduation visas.
                </p>
                <Link href="/destinations/canada" className="text-[13px] font-semibold uppercase text-accent no-underline">
                  Explore Canada Details <span className="nudge-icon">→</span>
                </Link>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 04: Alternating Layout (Image Top on Desktop) */}
            <div className="flex flex-col md:flex-col-reverse" style={{ gap: "24px" }}>
              <div className="gulf-card border-b border-[rgba(168,130,60,0.3)] md:border-b-0 md:border-t" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <span className="section-marker">04</span>
                <h3 className="font-display text-ink text-[24px] my-2 mb-4">Europe</h3>
                <p className="text-[15px] mb-6">
                  Navigating English-taught programs in Germany, France, and the Netherlands. High-quality tuition alternatives at historic public institutions.
                </p>
                <Link href="/destinations/europe" className="text-[13px] font-semibold uppercase text-accent no-underline">
                  Explore Europe Details <span className="nudge-icon">→</span>
                </Link>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elite Ivy (Dark Section) */}
      <section className="section-padding dark-section relative">
        <div className="container">
          <div className="asymmetric-grid">
            <div>
              <span className="kicker">Advisory Standards</span>
              <h2 className="font-display mb-8">
                Dubai-Based, Internationally Minded
              </h2>
              <p className="section-desc mb-8">
                Elite Ivy Consultations operates as a specialized boutique advisory. We reject mass-market portals and templated applications, working directly with GCC families to shape competitive profiles.
              </p>
              <ul className="list-none flex flex-col gap-6 mb-12">
                <li className="text-[15px]"><strong>Local Transcript Fluency:</strong> Absolute clarity on how CBSE, IB, and A-Levels scale within admissions committees.</li>
                <li className="text-[15px]"><strong>Same-Timezone Advisory:</strong> Zero delays. Direct access via WhatsApp matching UAE family schedules.</li>
                <li className="text-[15px]"><strong>Senior Strategy:</strong> Dedicated counselors reviewing every line of code, recommendation, and profile highlight.</li>
              </ul>
              <MagneticButton href="/about" className="btn btn-secondary" style={{ color: "#E7DCC8", borderColor: "rgba(231,220,200,0.4)" }}>
                Read Philosophy
              </MagneticButton>
            </div>
            <div className="bg-bg/[.05] border-t border-brass p-12 self-center mt-8">
              <h3 className="font-display text-[20px] mb-6 text-bg">Our Core Philosophy</h3>
              <p className="text-[15px] italic mb-8">
                &quot;We do not write admissions essays or fabricate extracurricular portfolios. We coach students to identify their academic strengths, articulate their intellectual curiosity, and construct applications that admissions directors respect.&quot;
              </p>
              <span className="text-[12px] uppercase tracking-[0.08em] text-brass font-semibold">
                Elite Ivy Consultations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding">
        <div className="container">
          <span className="kicker">Testimonials</span>
          <h2 className="font-display text-ink mb-16">
            Real Students. Real Outcomes.
          </h2>
          <div className="grid-2">
            <div className="gulf-card flex flex-col">
              <TestimonialVideo
                videoUrl="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-front-of-a-university-4221-large.mp4"
                studentName="Aditya R."
                thumbnailBackground="linear-gradient(135deg, #0E3331 0%, #15423f 100%)"
              />
              <p className="text-[16px] italic mb-8 grow">
                &quot;Having an advisor who understands how GEMS transcripts are perceived in the Ivy League was vital. Elite Ivy helped contextualize my profile and essay topics perfectly.&quot;
              </p>
              <div className="mt-auto">
                <strong className="block text-[14px] text-ink">Aditya R.</strong>
                <span className="text-[12px] text-brass">CBSE Student · Admitted to Wharton (UPenn) · B.S. Economics &amp; Finance</span>
              </div>
            </div>
            <div className="gulf-card flex flex-col">
              <TestimonialVideo
                videoUrl="https://assets.mixkit.co/videos/preview/mixkit-academic-building-of-a-university-4223-large.mp4"
                studentName="Layla K."
                thumbnailBackground="linear-gradient(135deg, #15423f 0%, #C1572C 100%)"
              />
              <p className="text-[16px] italic mb-8 grow">
                &quot;Their essay coaching refined my personal statement from a simple description of my activities to a genuine narrative. It made all the difference for my Oxford application.&quot;
              </p>
              <div className="mt-auto">
                <strong className="block text-[14px] text-ink">Layla K.</strong>
                <span className="text-[12px] text-brass">A-Levels Student · Admitted to Oxford University (PPE) · Philosophy, Politics, and Economics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
