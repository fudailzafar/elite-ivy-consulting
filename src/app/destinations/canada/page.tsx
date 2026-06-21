import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function CanadaDestination() {
  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Study Destinations</span>
          <h1 className="font-display offset-header mb-8">
            Canada Admissions Strategy
          </h1>

          <p className="section-desc mb-12" style={{ maxWidth: "800px" }}>
            The Canadian higher education system is distinguished by top-tier public research universities, exceptional safety, and immigrant-friendly policies.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Key Strategic Pillars - Asymmetric Grid */}
          <div className="grid-2" style={{ marginBottom: "64px" }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "#0E3331" }}>
                The Co-op & Industry Integration
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Cooperative education (co-op) programs allow students to alternate semesters of academic study with paid, full-time employment in their fields of study. This provides invaluable industry experience and connections with leading global employers prior to graduation.
              </p>
              <p style={{ fontSize: "16px", color: "#18181C" }}>
                Universities like Waterloo, University of Toronto, and UBC maintain extensive partnerships with technology firms, financial institutions, and engineering firms across North America.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Financial Investment
                </strong>
                <p style={{ fontSize: "15px" }}>CAD$30,000 — CAD$65,000 per year (Tuition varies by university and program; living expenses are extra).</p>
              </div>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Intake Timeline
                </strong>
                <p style={{ fontSize: "15px" }}>Primary: September (Fall Term). Select courses offer a January intake. Applications open in October and close in January/February.</p>
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
                1. Academic Scores & Portals
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Admissions are heavily score-based, prioritizing high school GPA. Ontario applications go through the centralized OUAC portal, while other provinces evaluate candidates directly.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Required: Detailed secondary transcripts, CBSE/IB predictions, and English proficiency (IELTS).
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                2. Top Tier Placements
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Canada's U15 research group represents the peak of institutional excellence. We assist students in securing spots in premium programs at UofT, McGill, UBC, and the University of Waterloo.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Key fields: Software Engineering, Business Administration, Data Science, and Natural Sciences.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                3. Post-Graduation Work Permit (PGWP)
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Graduates of eligible Canadian designated learning institutions qualify for a Post-Graduation Work Permit (PGWP) of up to 3 years. This permits open work opportunities across any sector.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Pathway: Clear, structured transition to Canadian Permanent Residency (PR) via Express Entry.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
