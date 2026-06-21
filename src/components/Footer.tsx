"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 pb-8" style={{ background: "#E7DCC8" }}>
      <div className="container">
        <div className="brass-divider mb-12"></div>

        {/* Main Content */}
        <div className="footer-content-flex">
          {/* Left: Brand */}
          <div className="max-w-[450px]">
            <Link href="/" className="footer-logo flex flex-col no-underline mb-6">
              <span className="logo-text" style={{ color: "#0E3331" }}>Elite Ivy</span>
              <span className="logo-subtext">Consultations</span>
            </Link>
            <p style={{ color: "rgba(14,51,49,0.65)", marginBottom: "2rem", fontSize: "14px", lineHeight: "1.65" }}>
              Senior advisory firm for undergraduate and postgraduate university admissions. Fluent in GCC transcripts and global entry standards.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-4" style={{ color: "#0E3331" }}>
              <a href="mailto:admissions@eliteivy.ae" title="Email Inquiries" style={{ color: "#0E3331", opacity: 0.7, display: "inline-flex", transition: "opacity 450ms" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a href="tel:+97141234567" title="Telephone" style={{ color: "#0E3331", opacity: 0.7, display: "inline-flex", transition: "opacity 450ms" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: "#0E3331", opacity: 0.7, display: "inline-flex", transition: "opacity 450ms" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </a>
              <a href="https://instagram.com/eliteivyconsultations" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: "#0E3331", opacity: 0.7, display: "inline-flex", transition: "opacity 450ms" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Office + Nav */}
          <div className="footer-right-group">
            <div className="footer-col-right">
              <span className="block text-accent text-[10px] uppercase tracking-[0.12em] font-bold mb-6">
                Office Location
              </span>
              <p style={{ color: "rgba(14,51,49,0.65)", lineHeight: "1.65", fontSize: "14px" }}>
                Elite Ivy Consultations<br />
                Office 1402, Marina Plaza<br />
                Dubai Marina, Dubai, UAE
              </p>
              <p className="mt-6 text-[13px] text-brass font-semibold">
                Monday — Friday: 9:00 AM — 6:00 PM GST
              </p>
            </div>

            <div className="footer-col-nav">
              <span className="block text-accent text-[10px] uppercase tracking-[0.12em] font-bold mb-6">
                Navigation
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { href: "/", label: "Home" },
                  { href: "/admissions", label: "Admissions" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{ color: "rgba(14,51,49,0.75)", fontSize: "14px", textDecoration: "none", transition: "color 450ms cubic-bezier(0.22,1,0.36,1)" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#C1572C")}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(14,51,49,0.75)")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <div className="brass-divider my-8" style={{ opacity: 0.2 }}></div>
          <div className="flex flex-row justify-between items-center flex-wrap gap-4 text-[12px]" style={{ color: "rgba(14,51,49,0.5)" }}>
            <div>
              &copy; {currentYear} Elite Ivy Consultations. All rights reserved. Registered Dubai Education Authority Partner.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" style={{ color: "rgba(14,51,49,0.45)", fontSize: "12px", textDecoration: "none", transition: "color 450ms" }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: "rgba(14,51,49,0.45)", fontSize: "12px", textDecoration: "none", transition: "color 450ms" }}>Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
