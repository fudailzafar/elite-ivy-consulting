"use client";

import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "US Admissions", "UK Admissions", "Test Prep", "GCC Specifics"];

  const posts = [
    {
      id: 1,
      title: "UCAS Personal Statements for Russell Group Entry",
      excerpt: "Unlike the US holistic approach, the UK UCAS system demands a highly academic, single-focus narrative.",
      category: "UK Admissions",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Translating CBSE & IB Transcripts for US Colleges",
      excerpt: "Admissions directors in Boston and California evaluate grades from UAE schools through localized weighting matrices.",
      category: "GCC Specifics",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Positioning Your Common App Personal Statement",
      excerpt: "How to refine the personal essay from a list of achievements into a cohesive intellectual narrative.",
      category: "US Admissions",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "SAT/ACT Submission in Test-Optional Admissions",
      excerpt: "Analyzing historical data to determine when standardized test submissions benefit UAE applicants.",
      category: "Test Prep",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Oxbridge Interview Preparation for UAE Students",
      excerpt: "Key logic exercises and speaking habits required to pass academic interviews conducted by Oxbridge tutors.",
      category: "UK Admissions",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Extracurricular Planning for GCC Admissions",
      excerpt: "How to design high-impact independent research projects that stand out to Tier 1 committees.",
      category: "US Admissions",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="animate-mask-reveal relative overflow-x-hidden">
      <section className="section-padding">
        <div className="container">
          <span className="kicker">Insights &amp; Advisory</span>
          <h1 className="font-display text-ink text-left mb-4">
            Blog & Insights
          </h1>
          <p className="section-desc mb-12 text-left" style={{ maxWidth: "700px" }}>
            Strategic perspectives on global higher education admissions, tailored for UAE-based families and curriculum conversions.
          </p>

          <div className="brass-divider my-12"></div>

          {/* Category Tab Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap sm:inline-flex sm:flex-nowrap gap-2 sm:gap-1 sm:bg-[rgba(14,51,49,0.06)] sm:p-1 sm:rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 sm:px-[14px] sm:py-[6px] text-[13px] font-medium rounded-lg sm:rounded-md cursor-pointer transition-all whitespace-nowrap border sm:border-none ${
                    selectedCategory === category 
                      ? "bg-[#E7DCC8] text-[#0E3331] border-transparent shadow-sm" 
                      : "bg-[rgba(14,51,49,0.03)] sm:bg-transparent border-[rgba(168,130,60,0.1)] text-[#18181C]"
                  }`}
                  style={{ fontFamily: "var(--font-geist), sans-serif" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Post Grid */}
          <div className="grid-3 gap-4">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                {/* Category Sorting Tag Above Image */}
                <span className="kicker" style={{ fontSize: "11px", marginBottom: "16px" }}>
                  {post.category}
                </span>

                {/* Card Image */}
                <div className="relative w-full overflow-hidden rounded-lg border border-brass-border mb-6" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="blog-card-image w-full h-full object-cover transition-transform duration-[450ms]"
                  />
                </div>

                {/* Text Content */}
                <div className="grow flex flex-col">
                  <h2 className="font-display text-ink text-[20px] mb-4 min-h-[48px] leading-[1.2]">
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-body mb-8 grow leading-[1.4]">
                    {post.excerpt}
                  </p>
                </div>

                {/* Border Bottom Divider */}
                <div className="border-b border-brass-border mb-6"></div>

                {/* Read More Link */}
                <div className="flex justify-start">
                  <span className="text-[12px] font-semibold uppercase text-accent inline-flex items-center cursor-pointer">
                    Read more <span className="nudge-icon">→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-left">
              <p>No articles found under this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
