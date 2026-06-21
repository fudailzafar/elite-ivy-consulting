import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { Laptop, Briefcase, Settings, BookOpen, LineChart, Scale, Activity, Terminal, Landmark, Database, Microscope, Globe, Wrench, Building2, Palette, CheckCircle2 } from "lucide-react";

export default function Destinations() {
  const getCourseIcon = (course: string) => {
    const props = { size: 14, style: { color: "#C1572C", marginRight: "8px", minWidth: "14px" } };
    switch (course) {
      case "Computer Science": return <Laptop {...props} />;
      case "Business & Finance": return <Briefcase {...props} />;
      case "Engineering": return <Settings {...props} />;
      case "Liberal Arts": return <BookOpen {...props} />;
      case "Economics & Finance": return <LineChart {...props} />;
      case "Law": return <Scale {...props} />;
      case "Medicine & Life Sciences": return <Activity {...props} />;
      case "Software Engineering": return <Terminal {...props} />;
      case "Commerce & Finance": return <Landmark {...props} />;
      case "Data Science": return <Database {...props} />;
      case "Natural Sciences": return <Microscope {...props} />;
      case "International Relations": return <Globe {...props} />;
      case "Mechanical Engineering": return <Wrench {...props} />;
      case "Business Administration": return <Building2 {...props} />;
      case "Design": return <Palette {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };
  const destinations = [
    {
      country: "United States",
      slug: "usa",
      image: "/usa.png",
      reverse: false,
      whyChoose: "Dominates global research university rankings. The system prioritizes holistic evaluation, evaluating extracurricular achievements, essays, and character alongside scores. Offers immense campus resource budgets and active alumni networks.",
      costBand: "$45,000 — $85,000 per year (Tuition + Living)",
      visaPathway: "12-month OPT (Optional Practical Training), extendable by 24 months for STEM-designated degrees.",
      intakeWindows: "September (Fall term - primary), January (Spring term - transfer/limited).",
      courses: ["Computer Science", "Business & Finance", "Engineering", "Liberal Arts"],
      chooseIf: "Choose the US if you seek a broad curriculum with room to explore multiple disciplines before declaring a major, want an active campus residential life, or plan to leverage STEM work extensions.",
    },
    {
      country: "United Kingdom",
      slug: "uk",
      image: "/uk.png",
      reverse: true,
      whyChoose: "Home to the historic Russell Group. Offers deeply focused, single-subject degrees where you dive straight into your chosen major from day one. High-quality 1-year Master's programs make it a popular choice for PG students.",
      costBand: "£22,000 — £45,000 per year (Tuition)",
      visaPathway: "2-year Graduate Route post-study work visa, transitionable to Skilled Worker visa.",
      intakeWindows: "September (Primary intake), January (Select postgraduate programs).",
      courses: ["Economics & Finance", "Law", "Medicine & Life Sciences", "Engineering"],
      chooseIf: "Choose the UK if you want a highly specialized, structured academic path with no general education requirements and value finishing your bachelor's degree in exactly three years.",
    },
    {
      country: "Canada",
      slug: "canada",
      image: "/canada.png",
      reverse: false,
      whyChoose: "Top-tier public research universities (UofT, McGill, UBC) offering high academic quality in safe, immigrant-friendly environments. Famous for integrating cooperative education (co-op) terms directly into the academic timeline.",
      costBand: "CAD$30,000 — CAD$65,000 per year (Tuition)",
      visaPathway: "Up to 3-year Post-Graduation Work Permit (PGWP) based on course duration.",
      intakeWindows: "September (Fall - primary), January (Winter - select courses).",
      courses: ["Software Engineering", "Commerce & Finance", "Data Science", "Natural Sciences"],
      chooseIf: "Choose Canada if you want structured, paid industry internships (co-op terms) integrated into your degree and a clear, stable pathway to permanent residency post-graduation.",
    },
    {
      country: "Europe (English-Taught)",
      slug: "europe",
      image: "/europe.png",
      reverse: true,
      whyChoose: "Historic institutions in Germany, the Netherlands, and France offering world-class bachelor's and master's taught entirely in English. Extremely affordable tuition coupled with high quality of life and cultural immersion.",
      costBand: "€0 — €15,000 per year (Low/No Tuition)",
      visaPathway: "1-year post-study search visa (duration and terms vary by country).",
      intakeWindows: "September (Primary intake).",
      courses: ["International Relations", "Mechanical Engineering", "Business Administration", "Design"],
      chooseIf: "Choose Europe if you want to graduate with minimal or zero student debt at historic public institutions, are excited about cultural immersion, and are eager to acquire a second language.",
    },
  ];

  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Geographic Strategy</span>
          <h1 className="font-display offset-header">
            Study Destination Analysis
          </h1>
          <p className="section-desc mb-16" style={{ maxWidth: "700px" }}>
            We compare target country guidelines to align university choices with your long-term career intent and visa requirements.
          </p>

          {/* 2x2 Layout List (Borderless) */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "64px",
            marginBottom: "96px"
          }}>
            {destinations.map((dest) => {
              return (
                <div 
                  key={dest.slug} 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    backgroundColor: "transparent"
                  }}
                >
                  {/* Top Half: Content Left (50%), Image Right (50%) */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", flexGrow: 1 }}>
                    {/* Content Left */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <h2 className="font-display" style={{ fontSize: "28px", margin: "0 0 16px 0", color: "#0E3331" }}>
                        {dest.country}
                      </h2>
                      <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                        {dest.whyChoose}
                      </p>
                      <MagneticButton href={`/destinations/${dest.slug}`} className="btn btn-secondary" style={{ textTransform: "none", fontSize: "12px", alignSelf: "flex-start", marginTop: "auto" }}>
                        Find more details
                      </MagneticButton>
                    </div>

                    {/* Image Right */}
                    <div style={{ position: "relative", minHeight: "240px", borderRadius: "16px", overflow: "hidden" }}>
                      <img 
                        src={dest.image} 
                        alt={dest.country} 
                        loading="lazy" 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    </div>
                  </div>
                  
                  {/* Bottom Half: Key Disciplines */}
                  <div style={{ paddingTop: "24px", marginTop: "24px", borderTop: "1px solid rgba(168, 130, 60, 0.15)" }}>
                    <strong style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E3331", display: "block", marginBottom: "12px" }}>
                      Key Disciplines
                    </strong>
                    <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "16px" }}>
                      {dest.courses.map((course) => (
                        <li key={course} style={{ fontSize: "13px", display: "flex", alignItems: "center" }}>
                          {getCourseIcon(course)}
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
