import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

// Custom SVG Profile Frame Placeholder matching the "Gulf Modern" theme
interface ProfilePlaceholderProps {
  initials: string;
}

function ProfilePlaceholder({ initials }: ProfilePlaceholderProps) {
  return (
    <div style={{ 
      width: "100%", 
      aspectRatio: "4/5", 
      backgroundColor: "rgba(14, 51, 49, 0.03)", 
      border: "1px solid rgba(168,130,60,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginBottom: "24px",
      overflow: "hidden",
      borderRadius: "12px"
    }}>
      {/* Abstract architectural elements in SVG */}
      <svg viewBox="0 0 100 120" style={{ width: "70%", height: "70%", opacity: 0.25 }}>
        <circle cx="50" cy="45" r="22" fill="none" stroke="#A8823C" strokeWidth="0.75" />
        <path d="M 10 110 A 40 40 0 0 1 90 110 Z" fill="none" stroke="#A8823C" strokeWidth="0.75" />
        <line x1="50" y1="5" x2="50" y2="115" stroke="#A8823C" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="5" y1="60" x2="95" y2="60" stroke="#A8823C" strokeWidth="0.5" strokeDasharray="3,3" />
      </svg>
      <div style={{ 
        position: "absolute", 
        fontSize: "12px", 
        color: "#0E3331", 
        letterSpacing: "0.15em",
        fontWeight: "600",
        backgroundColor: "#E7DCC8",
        padding: "4px 10px",
        border: "1px solid #A8823C",
        borderRadius: "4px"
      }}>
        {initials} PORTRAIT
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Behind the Scenes</span>
          <h1 className="font-display" style={{ marginBottom: "32px" }}>
            About Us
          </h1>
          
          <p className="section-desc mb-12">
            Elite Ivy Consultations operates as a specialized boutique admissions advisory. We reject mass-market portals and templated applications, working directly with GCC families to shape competitive profiles.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          {/* Our Story & Values (50/50 layout) */}
          <div className="grid-2" id="our-story" style={{ marginBottom: "96px" }}>
            <div style={{ paddingRight: "32px" }}>
              <span className="kicker">Our Story</span>
              <h2 className="font-display" style={{ marginBottom: "24px" }}>
                The Founder's Journey
              </h2>
              <p className="section-desc mb-8">
                Elite Ivy Consultations was founded by <strong>Salabat Khan</strong> out of personal necessity and lived experience. Salabat moved to the United States as an architect from India, navigating the complex academic environments of the Middle East and South Asia. 
              </p>
              <p className="section-desc mb-8">
                During his transition, he realized that discovering admissions pathways, securing merit scholarships, and deciphering foreign transcript evaluations manually was a monumental and opaque struggle. The systemic hurdles faced by international candidates were often overwhelming.
              </p>
              <p className="section-desc">
                Having successfully decoded the admissions matrix, Salabat established Elite Ivy to ensure that other students from Dubai, the UAE, and the wider GCC region do not have to struggle in the dark. We turn what is usually a stressful, trial-and-error manual process into a clear, strategic, and successful admissions pathway.
              </p>
            </div>

            <div style={{ paddingLeft: "32px", borderLeft: "3px solid #C1572C", display: "flex", flexDirection: "column" }}>
              <span className="kicker">Core Values</span>
              <h2 className="font-display" style={{ marginBottom: "24px" }}>
                What Guides Us
              </h2>
              
              <div className="grid-2" style={{ gap: "24px", flexGrow: 1 }}>
                {/* 1. Student-Centric */}
                <div style={{ border: "1px solid rgba(168,130,60,0.3)", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
                  <strong style={{ display: "block", color: "#0E3331", fontSize: "15px", marginBottom: "8px" }}>1. Student-Centric</strong>
                  <span style={{ fontSize: "14px", color: "#18181C", opacity: 0.9, lineHeight: "1.6", display: "block" }}>
                    Every recommendation is tailored to the student's actual learning style, program structure, and campus environment preference.
                  </span>
                </div>
                {/* 2. Integrity */}
                <div style={{ border: "1px solid rgba(168,130,60,0.3)", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
                  <strong style={{ display: "block", color: "#0E3331", fontSize: "15px", marginBottom: "8px" }}>2. Integrity</strong>
                  <span style={{ fontSize: "14px", color: "#18181C", opacity: 0.9, lineHeight: "1.6", display: "block" }}>
                    Zero fabrication of essays or profiles. We cultivate genuine intellectual curiosity and align academic strengths with committee expectations.
                  </span>
                </div>
                {/* 3. Trust */}
                <div style={{ border: "1px solid rgba(168,130,60,0.3)", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
                  <strong style={{ display: "block", color: "#0E3331", fontSize: "15px", marginBottom: "8px" }}>3. Trust</strong>
                  <span style={{ fontSize: "14px", color: "#18181C", opacity: 0.9, lineHeight: "1.6", display: "block" }}>
                    We build transparent partnerships with families, setting realistic expectations and delivering honest feedback at every step.
                  </span>
                </div>
                {/* 4. Expertise & Learning */}
                <div style={{ border: "1px solid rgba(168,130,60,0.3)", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
                  <strong style={{ display: "block", color: "#0E3331", fontSize: "15px", marginBottom: "8px" }}>4. Expertise</strong>
                  <span style={{ fontSize: "14px", color: "#18181C", opacity: 0.9, lineHeight: "1.6", display: "block" }}>
                    Deep fluency in how UAE transcripts are scaled globally. We track real-time policy adjustments in top-tier admissions.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="brass-divider" style={{ margin: "64px 0" }}></div>

          {/* Advisory Team Section */}
          <span className="kicker" id="our-team">Advisory Team</span>
          <h2 className="font-display" style={{ marginBottom: "16px" }}>
            Meet The Team
          </h2>
          <p className="section-desc" style={{ maxWidth: "800px", marginBottom: "48px" }}>
            We work as a cohesive unit, blending admissions strategy, test preparation, mental resilience, and long-term career planning.
          </p>

          {/* Simple 4-column Horizontal Grid Layout */}
          <div className="grid-4" style={{ marginBottom: "96px" }}>
            {/* Team Member 1 */}
            <div className="gulf-card">
              <ProfilePlaceholder initials="SK" />
              <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "4px" }}>
                Salabat Khan
              </h3>
              <span className="kicker" style={{ fontSize: "10px", color: "#C1572C", marginBottom: "16px" }}>
                Founder & US Admissions Strategist
              </span>
              <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                Salabat draws from his journey as an architect to map precise admissions frameworks. He handles candidate positioning, portfolio building, and Ivy League alignment.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Focus: US Ivy League Strategy & Admissions Committee Benchmarking.
              </span>
            </div>

            {/* Team Member 2 */}
            <div className="gulf-card">
              <ProfilePlaceholder initials="SU" />
              <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "4px" }}>
                Syeda Urooj Khan
              </h3>
              <span className="kicker" style={{ fontSize: "10px", color: "#C1572C", marginBottom: "16px" }}>
                IELTS Trainer & Admissions Advisor
              </span>
              <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                Syeda helps students achieve elite 8.5+ band scores. She brings structured strategy, interview prep, mock evaluations, and UCAS/Common App essay coaching.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Focus: IELTS Instruction, Interview Prep & UK Personal Statements.
              </span>
            </div>

            {/* Team Member 3 */}
            <div className="gulf-card">
              <ProfilePlaceholder initials="HK" />
              <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "4px" }}>
                Hashmat Khan
              </h3>
              <span className="kicker" style={{ fontSize: "10px", color: "#C1572C", marginBottom: "16px" }}>
                SAT Specialist & Systems Advisor
              </span>
              <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                With over 20 years of SAT/ACT prep experience, Hashmat has guided hundreds of GCC students to perfect scores by clarifying the logic behind global testing matrices.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Focus: SAT/ACT Preparation & Multi-Country Application Systems.
              </span>
            </div>

            {/* Team Member 4 */}
            <div className="gulf-card">
              <ProfilePlaceholder initials="SS" />
              <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "4px" }}>
                Saad Syed
              </h3>
              <span className="kicker" style={{ fontSize: "10px", color: "#C1572C", marginBottom: "16px" }}>
                Student Mentor & Career Advisor
              </span>
              <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                Saad provides critical mentorship to help students manage academic pressures, build resilience, adjust to campus life, and map future professional paths.
              </p>
              <span style={{ fontSize: "12px", fontStyle: "italic", color: "#A8823C" }}>
                Focus: Student Mentorship, Stress Navigation & Career Alignment.
              </span>
            </div>
          </div>

          <div className="brass-divider" style={{ margin: "64px 0" }}></div>

          {/* Why Hire Us Section */}
          <span className="kicker" id="why-hire-us">Advisory Quality</span>
          <h2 className="font-display" style={{ marginBottom: "16px" }}>
            Why Choose Elite Ivy
          </h2>
          <p className="section-desc" style={{ maxWidth: "800px", marginBottom: "48px" }}>
            Admissions counseling is an investment in trajectory. We operate as active partners in your student's future.
          </p>

          <div className="grid-4" style={{ marginBottom: "96px", alignItems: "stretch" }}>
            {/* 01: Content Top, Image Bottom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="gulf-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column", borderTop: "none", borderBottom: "1px solid rgba(168,130,60,0.3)" }}>
                <span className="section-marker">01</span>
                <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "16px" }}>
                  Strategy Not Guesswork
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  We analyze historical admission datasets and transcript evaluation curves rather than relying on common myths or basic internet search data.
                </p>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 02: Alternating Layout (Image Top on Desktop) */}
            <div className="flex flex-col md:flex-col-reverse" style={{ gap: "24px" }}>
              <div className="gulf-card border-b border-[rgba(168,130,60,0.3)] md:border-b-0 md:border-t" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <span className="section-marker">02</span>
                <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "16px" }}>
                  Save Time and Stress
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  We structure every milestone, deadline, and testing cycle, allowing families to enjoy the senior year instead of fighting over deadlines.
                </p>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 03: Content Top, Image Bottom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="gulf-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column", borderTop: "none", borderBottom: "1px solid rgba(168,130,60,0.3)" }}>
                <span className="section-marker">03</span>
                <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "16px" }}>
                  Up-to-Date Insights
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  Admissions policies, test-optional rules, and visa regulations shift rapidly. We maintain constant vigilance and real-time updates for GCC candidates.
                </p>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>

            {/* 04: Alternating Layout (Image Top on Desktop) */}
            <div className="flex flex-col md:flex-col-reverse" style={{ gap: "24px" }}>
              <div className="gulf-card border-b border-[rgba(168,130,60,0.3)] md:border-b-0 md:border-t" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <span className="section-marker">04</span>
                <h3 className="font-display" style={{ fontSize: "18px", color: "#0E3331", marginBottom: "16px" }}>
                  Unlock Opportunities
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  By maximizing essay impact, strategic school lists, and portfolio choices, we uncover scholarship matches and reach-school opportunities.
                </p>
              </div>
              <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(168,130,60,0.15)", borderRadius: "8px", border: "1px dashed rgba(168,130,60,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>Image Placeholder</span>
              </div>
            </div>
          </div>

          <div className="brass-divider" style={{ margin: "64px 0" }}></div>
        </div>
      </section>
    </div>
  );
}
