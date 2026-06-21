import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function USADestination() {
  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Study Destinations</span>
          <h1 className="font-display offset-header mb-8">
            United States Admissions Strategy
          </h1>

          <p className="section-desc mb-12" style={{ maxWidth: "800px" }}>
            The American higher education system is renowned for its academic flexibility, immense research budgets, and holistic admissions process. We help UAE students curate profiles that stand out to competitive US admissions committees.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Key Strategic Pillars - Asymmetric Grid */}
          <div className="grid-2" style={{ marginBottom: "64px" }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "#0E3331" }}>
                The Holistic Admissions Model
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Unlike systems that rely solely on final exam scores, US universities assess the whole student. Academic transcript rigor, standardized test scores (SAT/ACT), extracurricular commitment, letters of recommendation, and personal voice essays are evaluated in context.
              </p>
              <p style={{ fontSize: "16px", color: "#18181C" }}>
                For students in Dubai schools, this means starting profile development early. Admissions officers look for intellectual curiosity and leadership that extends outside the classroom walls.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Financial Investment
                </strong>
                <p style={{ fontSize: "15px" }}>$45,000 — $85,000 per year (Tuition + Room & Board depending on institution type and location).</p>
              </div>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Intake Timeline
                </strong>
                <p style={{ fontSize: "15px" }}>Primary: September (Fall Term). Early Decision/Action deadlines occur in November; Regular Decision in January.</p>
              </div>
            </div>
          </div>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Detailed Specifications Cards */}
          <h2 className="font-display offset-header" style={{ fontSize: "24px", marginBottom: "48px", color: "#0E3331" }}>
            Admissions & Logistical Requirements
          </h2>

          <div className="grid-3" style={{ gap: "48px" }}>
            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                1. Academic & Testing Requirements
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Maintain a high GPA throughout grades 9–12. While many colleges remain test-optional, competitive standardized test scores (SAT or ACT) strengthen transcripts from UAE private schools.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Required: Common App Essays, Supplemental Prompts, and 2-3 Teacher/Counselor Recommendations.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                2. Ivy League & Tier 1 Placements
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Ivy League schools (Harvard, Columbia, UPenn, Yale) and top research private/public universities require highly differentiated profiles. We guide students on research internships, summer program selections, and portfolio preparation.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Key fields: Computer Science, Finance/Economics, Pre-Med, Liberal Arts, and Engineering.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                3. Post-Study Work Visas (OPT)
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                International graduates receive a 12-month Optional Practical Training (OPT) period. If you graduate with a STEM-designated degree, you qualify for an additional 24-month work extension.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Pathway: H-1B sponsorship and global firm placement support.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
