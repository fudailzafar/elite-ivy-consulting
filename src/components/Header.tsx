"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAboutOpen(false);
    setAdmissionsOpen(false);
    setDestinationsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setAdmissionsOpen(false);
    setDestinationsOpen(false);
  };

  const handleAccordionToggle = (type: "about" | "admissions" | "destinations", e: React.MouseEvent) => {
    e.preventDefault();
    if (type === "about") {
      setAboutOpen(!aboutOpen);
      setAdmissionsOpen(false);
      setDestinationsOpen(false);
    } else if (type === "admissions") {
      setAdmissionsOpen(!admissionsOpen);
      setAboutOpen(false);
      setDestinationsOpen(false);
    } else {
      setDestinationsOpen(!destinationsOpen);
      setAboutOpen(false);
      setAdmissionsOpen(false);
    }
  };

  const isAboutActive = pathname === "/about";
  const isAdmissionsActive = pathname === "/admissions";

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand logo */}
        <Link href="/" className="logo-link" onClick={closeMenu}>
          <span className="logo-text">Elite Ivy</span>
          <span className="logo-subtext">Consultations</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {/* About Dropdown */}
          <div className="nav-item-dropdown">
            <Link href="/about" className={`nav-link ${isAboutActive ? "active" : ""}`}>
              About Us
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="dropdown-menu shadcn-dropdown">
              <Link href="/about#our-story" className="dropdown-link shadcn-dropdown-item">Our Story &amp; Values</Link>
              <Link href="/about#our-team" className="dropdown-link shadcn-dropdown-item">Our Team</Link>
              <Link href="/about#why-hire-us" className="dropdown-link shadcn-dropdown-item">Why Hire Us</Link>
            </div>
          </div>

          {/* Admissions Dropdown */}
          <div className="nav-item-dropdown">
            <Link href="/admissions" className={`nav-link ${isAdmissionsActive ? "active" : ""}`}>
              Admissions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="dropdown-menu shadcn-dropdown">
              <Link href="/admissions#process" className="dropdown-link shadcn-dropdown-item">Process &amp; Timeline</Link>
              <Link href="/admissions#undergraduate" className="dropdown-link shadcn-dropdown-item">Undergraduate</Link>
              <Link href="/admissions#graduate" className="dropdown-link shadcn-dropdown-item">Graduate</Link>
              <Link href="/admissions#test-prep" className="dropdown-link shadcn-dropdown-item">Test Preparation</Link>
              <Link href="/admissions#pro-bono" className="dropdown-link shadcn-dropdown-item">Pro Bono</Link>
            </div>
          </div>



          <Link href="/blog" className={`nav-link ${pathname === "/blog" ? "active" : ""}`}>
            Blog
          </Link>

          <MagneticButton href="/contact" className="btn btn-primary" style={{ fontSize: "13px", padding: "8px 16px" }}>
            Contact Us
          </MagneticButton>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line" style={{ transform: isOpen ? "translateY(7px) rotate(45deg)" : "none", transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)" }}></span>
          <span className="hamburger-line" style={{ opacity: isOpen ? 0 : 1, transition: "opacity 450ms cubic-bezier(0.22,1,0.36,1)" }}></span>
          <span className="hamburger-line" style={{ transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none", transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)" }}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className="mobile-menu"
        style={{ 
          opacity: isOpen ? 1 : 0, 
          pointerEvents: isOpen ? 'auto' : 'none', 
          transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
          transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
          <div className="container">
          <nav className="mobile-nav">
            {/* About Accordion */}
            <div className="mobile-nav-item">
              <div className="accordion-header">
                <Link href="/about" className="accordion-label" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
                <button
                  className="p-2"
                  onClick={(e) => handleAccordionToggle("about", e)}
                  aria-expanded={aboutOpen}
                  aria-label="Toggle About Us menu"
                >
                  <span className={`accordion-icon ${aboutOpen ? "open" : ""}`} aria-hidden="true">▾</span>
                </button>
              </div>
              <div className={`accordion-content ${aboutOpen ? "open" : ""}`}>
                <div className="accordion-content-inner">
                  <Link href="/about#our-story" className="accordion-link" onClick={closeMenu}>Our Story &amp; Values</Link>
                  <Link href="/about#our-team" className="accordion-link" onClick={closeMenu}>Our Team</Link>
                  <Link href="/about#why-hire-us" className="accordion-link" onClick={closeMenu}>Why Hire Us</Link>
                </div>
              </div>
            </div>

            {/* Admissions Accordion */}
            <div className="mobile-nav-item">
              <div className="accordion-header">
                <Link href="/admissions" className="accordion-label" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>Admissions</Link>
                <button
                  className="p-2"
                  onClick={(e) => handleAccordionToggle("admissions", e)}
                  aria-expanded={admissionsOpen}
                  aria-label="Toggle Admissions menu"
                >
                  <span className={`accordion-icon ${admissionsOpen ? "open" : ""}`} aria-hidden="true">▾</span>
                </button>
              </div>
              <div className={`accordion-content ${admissionsOpen ? "open" : ""}`}>
                <div className="accordion-content-inner">
                  <Link href="/admissions#process" className="accordion-link" onClick={closeMenu}>Process &amp; Timeline</Link>
                  <Link href="/admissions#undergraduate" className="accordion-link" onClick={closeMenu}>Undergraduate</Link>
                  <Link href="/admissions#graduate" className="accordion-link" onClick={closeMenu}>Graduate</Link>
                  <Link href="/admissions#test-prep" className="accordion-link" onClick={closeMenu}>Test Preparation</Link>
                  <Link href="/admissions#pro-bono" className="accordion-link" onClick={closeMenu}>Pro Bono</Link>
                </div>
              </div>
            </div>



            <div className="mobile-nav-item">
              <Link href="/blog" className="mobile-nav-link" onClick={closeMenu}>
                Blog
              </Link>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="mobile-menu-footer">
            <Link
              href="/contact"
              className="btn btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <a
              href="tel:+97141234567"
              className="btn btn-secondary w-full text-center"
            >
              Call Now
            </a>
          </div>
          </div>
        </div>
    </header>
  );
}
