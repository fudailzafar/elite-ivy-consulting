import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="section-padding dark-section" style={{ textAlign: "center" }}>
      <div className="container">
        <span className="kicker">Get Started</span>
        <h2
          className="font-display"
          style={{ marginBottom: "16px" }}
        >
          Tell us where you want to go.{" "}
          <br className="hidden md:block" />
          We&apos;ll tell you exactly how to get there.
        </h2>
        <p className="section-desc" style={{ margin: "0 auto 40px" }}>
          Let&apos;s review your academic transcript and map out a pathway to your target institutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full max-w-[300px] sm:w-auto sm:max-w-none text-center"
            style={{ backgroundColor: "#A8823C", color: "#FAF7F0", border: "none", textDecoration: "none" }}
          >
            Query via WhatsApp
          </a>
          <Link
            href="/contact"
            className="btn w-full max-w-[300px] sm:w-auto sm:max-w-none text-center"
            style={{
              backgroundColor: "transparent",
              color: "#E7DCC8",
              border: "1px solid rgba(231,220,200,0.5)",
              textDecoration: "none",
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
