import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function EuropeDestination() {
  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Study Destinations</span>
          <h1 className="font-display offset-header mb-8">
            European Admissions Strategy
          </h1>

          <p className="section-desc mb-12" style={{ maxWidth: "800px" }}>
            The European higher education landscape offers historic public institutions and world-class bachelor's programs taught entirely in English.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Key Strategic Pillars - Asymmetric Grid */}
          <div className="grid-2" style={{ marginBottom: "64px" }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "#0E3331" }}>
                The English-Taught European Landscape
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Countries like the Netherlands, Germany, France, and Switzerland host world-renowned public research universities that offer full degree tracks completely in English. The European system emphasizes independent research, cultural immersion, and deep intellectual focus.
              </p>
              <p style={{ fontSize: "16px", color: "#18181C" }}>
                This is an ideal choice for students seeking a cosmopolitan experience, the opportunity to learn a second language, and a prestigious degree with minimal educational debt.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Financial Investment
                </strong>
                <p style={{ fontSize: "15px" }}>€0 — €15,000 per year (Tuition is highly subsidized at public universities; living costs vary by city).</p>
              </div>
              <div className="gulf-card">
                <strong style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "4px" }}>
                  Intake Timeline
                </strong>
                <p style={{ fontSize: "15px" }}>Primary: September (Fall Term). Portals like Studielink (Netherlands) or uni-assist (Germany) open in October/November; deadlines fall between January and May.</p>
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
                1. Diploma Equivalencies & Portals
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                European universities have strict diploma recognition criteria. IB diplomas are widely accepted, while CBSE and US high school transcripts must meet specific AP/subject combinations for direct entry.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Required: Country-specific application portals and secondary school certificates.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                2. World-Class Institutions
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                We guide students through selective applications to world-class public systems. This includes TU Delft, University of Amsterdam, Munich (TUM), HEC Paris, and other top-tier institutions.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Key fields: International Relations, Mechanical & Aerospace Engineering, Business Administration, and Design.
              </span>
            </div>

            <div className="gulf-card">
              <h3 className="font-display" style={{ fontSize: "20px", color: "#0E3331", marginBottom: "16px" }}>
                3. Post-Study Orientation Year
              </h3>
              <p style={{ fontSize: "15px", marginBottom: "24px" }}>
                Most European nations offer a 1-year post-study job search visa (e.g., "Zoekjaar" in the Netherlands or "Jobseeker Visa" in Germany) to allow graduates to secure employment with local firms.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Pathway: Blue Card visa pathways for highly skilled professionals.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
