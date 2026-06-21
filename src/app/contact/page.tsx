"use client";

import { useState, useEffect, useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

interface Option {
  value: string;
  label: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    levelOfStudy: "",
    countryOfInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dropdown open states
  const [levelOpen, setLevelOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  // Refs for click outside detection
  const levelSelectRef = useRef<HTMLDivElement>(null);
  const countrySelectRef = useRef<HTMLDivElement>(null);

  const levelOptions: Option[] = [
    { value: "undergraduate", label: "Undergraduate Strategy (UG)" },
    { value: "postgraduate", label: "Postgraduate Advisory (PG)" },
    { value: "executive", label: "MBA & Executive Counselling" },
  ];

  const countryOptions: Option[] = [
    { value: "US", label: "United States (US)" },
    { value: "UK", label: "United Kingdom (UK)" },
    { value: "Canada", label: "Canada" },
    { value: "Europe", label: "Europe (English-Taught)" },
  ];

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (levelSelectRef.current && !levelSelectRef.current.contains(event.target as Node)) {
        setLevelOpen(false);
      }
      if (countrySelectRef.current && !countrySelectRef.current.contains(event.target as Node)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSelectChange = (field: "levelOfStudy" | "countryOfInterest", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Clear error
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    // Close select menus
    if (field === "levelOfStudy") {
      setLevelOpen(false);
    } else {
      setCountryOpen(false);
    }
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required.";
    if (!formData.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp number is required.";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.whatsapp.replace(/\s+/g, ""))) {
      nextErrors.whatsapp = "Please enter a valid phone number (e.g. +971 50 123 4567).";
    }
    if (!formData.levelOfStudy) nextErrors.levelOfStudy = "Please select a target level of study.";
    if (!formData.countryOfInterest) nextErrors.countryOfInterest = "Please select a target destination.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const selectedLevel = levelOptions.find(opt => opt.value === formData.levelOfStudy);
  const selectedCountry = countryOptions.find(opt => opt.value === formData.countryOfInterest);

  return (
    <div className="animate-mask-reveal" style={{ position: "relative", overflowX: "hidden" }}>
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Direct Contact</span>
          <h1 className="font-display offset-header">
            Connect with us Today
          </h1>
          <p className="section-desc mb-12" style={{ maxWidth: "800px" }}>
            We review admissions candidacies strictly by scheduled appointment. Submit our formal advisory enquiry form on the right, or initiate an instant WhatsApp consultation below.
          </p>

          <div className="brass-divider" style={{ margin: "48px 0" }}></div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 mt-12 items-start">
            {/* Left Column: Contact Channels & Location Map */}
            <div className="flex flex-col h-full gap-12 order-2 lg:order-1 border-t border-[rgba(168,130,60,0.3)] lg:border-t-0 pt-8 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col justify-center">
                  <span className="kicker" style={{ fontSize: "11px", marginBottom: "4px" }}>Dubai Head Office</span>
                  <h3 className="font-display" style={{ fontSize: "22px", color: "#0E3331", marginBottom: "16px" }}>
                    Elite Ivy Consultations
                  </h3>
                  <p style={{ fontSize: "15px", color: "#18181C", lineHeight: "1.6" }}>
                    Office 1402, Marina Plaza, Dubai Marina, Dubai, United Arab Emirates<br />
                    <span style={{ fontSize: "13px", color: "#A8823C", fontWeight: "500" }}>
                      (Directly adjacent to Dubai Marina Mall / Dubai Marina Metro Station)
                    </span>
                  </p>
                </div>
                <div className="w-full h-full min-h-[160px] rounded-lg overflow-hidden border border-[rgba(168,130,60,0.3)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6267866385315!2d55.1396263!3d25.0797825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6caec319e7eb%3A0xe54d3f545a60e0a5!2sMarina%20Plaza!5e0!3m2!1sen!2sae!4v1718876400000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marina Plaza Dubai Marina Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Direct Channels Grid */}
              <div className="contact-channels">
                <div className="contact-channel-card">
                  <span className="contact-channel-label">Telephone</span>
                  <span className="contact-channel-value">
                    <a href="tel:+97141234567">+971 4 123 4567</a>
                  </span>
                </div>

                <div className="contact-channel-card">
                  <span className="contact-channel-label">WhatsApp Enquiry</span>
                  <span className="contact-channel-value">
                    <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">+971 50 123 4567</a>
                  </span>
                </div>

                <div className="contact-channel-card">
                  <span className="contact-channel-label">Admissions Email</span>
                  <span className="contact-channel-value">
                    <a href="mailto:admissions@eliteivy.ae">admissions@eliteivy.ae</a>
                  </span>
                </div>

                <div className="contact-channel-card">
                  <span className="contact-channel-label">Instagram Portfolio</span>
                  <span className="contact-channel-value">
                    <a href="https://instagram.com/eliteivyconsultations" target="_blank" rel="noopener noreferrer">@eliteivyconsultations</a>
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp CTA block */}
              <div 
                className="mt-auto"
                style={{ 
                  backgroundColor: "#0E3331", 
                  padding: "32px", 
                  borderRadius: "8px"
                }}
              >
                <h4 className="font-display" style={{ fontSize: "17px", color: "#FAF7F0", marginBottom: "4px" }}>
                  Immediate Response Window
                </h4>
                <p style={{ fontSize: "14px", color: "rgba(250, 247, 240, 0.9)", marginBottom: "24px" }}>
                  Advisors respond within 15 minutes during standard office hours (9:00 AM — 6:00 PM GST).
                </p>
                <div>
                  <MagneticButton 
                    href="https://wa.me/971501234567?text=Hello%20Elite%20Ivy%20Consultations%2C%20I%20would%20like%20to%20query%20about%20admissions%20counseling." 
                    className="btn"
                    style={{ width: "100%", justifyContent: "center", textTransform: "none", fontSize: "13px", backgroundColor: "#A8823C", color: "#FAF7F0", border: "none" }}
                  >
                    Start Chat via WhatsApp &rarr;
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Right Column: Clean shadcn-styled Form with custom dropdowns */}
            <div className="bg-transparent order-1 lg:order-2 lg:border-l border-[rgba(168,130,60,0.3)] lg:pl-16">
              {isSubmitted ? (
                <div 
                  className="form-success" 
                  style={{ 
                    borderTop: "1px solid #A8823C", 
                    paddingTop: "32px" 
                  }}
                >
                  <h3 className="font-display" style={{ fontSize: "24px", color: "#0E3331", marginBottom: "16px" }}>
                    Enquiry Received
                  </h3>
                  <p style={{ fontSize: "15px", color: "#18181C", marginBottom: "32px" }}>
                    Thank you for contacting Elite Ivy Consultations. A senior admissions partner has been assigned to your profile and will get back to you within 2 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", whatsapp: "", levelOfStudy: "", countryOfInterest: "", message: "" });
                    }} 
                    className="btn btn-secondary"
                    style={{ textTransform: "none", fontSize: "13px" }}
                  >
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aditya Sharma"
                      className={`form-input ${errors.name ? "input-error" : ""}`}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp" className="form-label">WhatsApp Number (with UAE Country Code)</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="e.g. +971 50 123 4567"
                      className={`form-input ${errors.whatsapp ? "input-error" : ""}`}
                    />
                    {errors.whatsapp && <span className="form-error-msg">{errors.whatsapp}</span>}
                  </div>

                  {/* Custom Dropdown: Target Level of Study */}
                  <div className="form-group" style={{ position: "relative" }} ref={levelSelectRef}>
                    <label className="form-label">Target Level of Study</label>
                    <div 
                      onClick={() => {
                        setLevelOpen(!levelOpen);
                        setCountryOpen(false);
                      }}
                      className={`form-input ${errors.levelOfStudy ? "input-error" : ""}`}
                      style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        cursor: "pointer",
                        userSelect: "none"
                      }}
                    >
                      <span style={{ color: formData.levelOfStudy ? "#18181C" : "rgba(24, 24, 28, 0.4)" }}>
                        {selectedLevel ? selectedLevel.label : "Select Target Level"}
                      </span>
                      <svg 
                        width="10" 
                        height="6" 
                        viewBox="0 0 10 6" 
                        fill="none" 
                        style={{ 
                          transform: levelOpen ? "rotate(180deg)" : "none", 
                          transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)",
                          opacity: 0.7 
                        }}
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {levelOpen && (
                      <div 
                        className="shadcn-dropdown" 
                        style={{ 
                          position: "absolute", 
                          top: "calc(100% + 4px)", 
                          left: 0, 
                          right: 0, 
                          zIndex: 100,
                          display: "flex",
                          flexDirection: "column",
                          maxHeight: "220px",
                          overflowY: "auto",
                          backgroundColor: "#FAF7F0",
                          borderTop: "2px solid #C1572C"
                        }}
                      >
                        {levelOptions.map((opt) => (
                          <div
                            key={opt.value}
                            onClick={() => handleSelectChange("levelOfStudy", opt.value)}
                            className="shadcn-dropdown-item"
                            style={{
                              cursor: "pointer",
                              backgroundColor: formData.levelOfStudy === opt.value ? "rgba(14, 51, 49, 0.06)" : "transparent",
                              fontWeight: formData.levelOfStudy === opt.value ? "600" : "500"
                            }}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.levelOfStudy && <span className="form-error-msg">{errors.levelOfStudy}</span>}
                  </div>

                  {/* Custom Dropdown: Target Destination Country */}
                  <div className="form-group" style={{ position: "relative" }} ref={countrySelectRef}>
                    <label className="form-label">Target Destination Country</label>
                    <div 
                      onClick={() => {
                        setCountryOpen(!countryOpen);
                        setLevelOpen(false);
                      }}
                      className={`form-input ${errors.countryOfInterest ? "input-error" : ""}`}
                      style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        cursor: "pointer",
                        userSelect: "none"
                      }}
                    >
                      <span style={{ color: formData.countryOfInterest ? "#18181C" : "rgba(24, 24, 28, 0.4)" }}>
                        {selectedCountry ? selectedCountry.label : "Select Destination"}
                      </span>
                      <svg 
                        width="10" 
                        height="6" 
                        viewBox="0 0 10 6" 
                        fill="none" 
                        style={{ 
                          transform: countryOpen ? "rotate(180deg)" : "none", 
                          transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)",
                          opacity: 0.7 
                        }}
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {countryOpen && (
                      <div 
                        className="shadcn-dropdown" 
                        style={{ 
                          position: "absolute", 
                          top: "calc(100% + 4px)", 
                          left: 0, 
                          right: 0, 
                          zIndex: 100,
                          display: "flex",
                          flexDirection: "column",
                          maxHeight: "220px",
                          overflowY: "auto",
                          backgroundColor: "#FAF7F0",
                          borderTop: "2px solid #C1572C"
                        }}
                      >
                        {countryOptions.map((opt) => (
                          <div
                            key={opt.value}
                            onClick={() => handleSelectChange("countryOfInterest", opt.value)}
                            className="shadcn-dropdown-item"
                            style={{
                              cursor: "pointer",
                              backgroundColor: formData.countryOfInterest === opt.value ? "rgba(14, 51, 49, 0.06)" : "transparent",
                              fontWeight: formData.countryOfInterest === opt.value ? "600" : "500"
                            }}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.countryOfInterest && <span className="form-error-msg">{errors.countryOfInterest}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Optional Academic Context</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Currently studying IB Diploma at Dubai College. Target: Oxford PPE / Wharton Business School."
                      rows={5}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{ width: "100%", justifyContent: "center", textTransform: "none", fontSize: "14px" }}
                    >
                      {isSubmitting ? "Submitting Inquiry Profile..." : "Submit Advisory Enquiry Profile"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
