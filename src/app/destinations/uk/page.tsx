import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function UKDestination() {
  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Study Destinations</span>
          <h1 className="font-display offset-header mb-8">
            United Kingdom Admissions Strategy
          </h1>

          <p className="section-desc mb-12" style={{ maxWidth: "800px" }}>
            The UK higher education system is defined by deep subject specialization and historical prestige. Unlike other global systems, undergraduate programs allow you to focus strictly on your chosen subject from day one.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Key Strategic Pillars - Asymmetric Grid */}
          <div className="grid-2" style={{ marginBottom: "64px" }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "#0E3331" }}>
                The Specialized Degree Pathway
              </h2>
              <p style={{ marginBottom: "32px" }}>
                In England and Wales, most bachelor's degrees are completed in exactly three years. There are no general education requirements; you apply directly to a specific department. This structure suits students who have already identified their primary academic focus.
              </p>
              <p style={{ fontSize: "16px", color: "#18181C" }}>
                Admissions teams assess students primarily on quantitative academic achievement (A-levels, IB scores, CBSE grades) and standard-bearing subject knowledge.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Financial Investment
                </strong>
                <p style={{ fontSize: "15px" }}>£22,000 — £45,000 per year (Tuition varies by course, with clinical/medical studies at the higher range).</p>
              </div>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Intake Timeline
                </strong>
                <p style={{ fontSize: "15px" }}>Primary: September (Fall Term). UCAS early deadline (Oxbridge/Medicine) is mid-October; general deadline is late January.</p>
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
                UK admissions are transparent. Offers are generally conditional on meeting score boundaries in CBSE (Class 12), IB Diplomas, or A-Levels. Applications are processed through the centralized UCAS portal.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Required: 4,000-character UCAS Personal Statement focusing strictly on academic motivation.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                2. Oxbridge & Entrance Exams
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Applying to Oxford, Cambridge, or top medical courses demands specialized entrance exams. We prepare students for the LNAT (Law), UCAT (Medicine), ESAT, and TMUA (Mathematics/Engineering).
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Target universities: Oxbridge, LSE, Imperial College London, UCL, and King's College London.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                3. Post-Study Graduate Route
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Graduates can apply for the 2-year Graduate Route work visa. This allows you to work or seek employment in the UK at any skill level without requiring standard employer sponsorship.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Transition: Straightforward pathway to the Skilled Worker visa route.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
