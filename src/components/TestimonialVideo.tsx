"use client";

import { useState } from "react";

interface TestimonialVideoProps {
  videoUrl: string;
  studentName: string;
  thumbnailBackground?: string;
}

export default function TestimonialVideo({ videoUrl, studentName, thumbnailBackground }: TestimonialVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-player-wrapper">
      {isPlaying ? (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="video-element w-full h-full object-cover block border-none"
          style={{ backgroundColor: "#000" }}
        />
      ) : (
        <button
          className="video-thumbnail-overlay border-none w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 cursor-pointer p-8"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video testimonial of ${studentName}`}
          style={{
            background: thumbnailBackground || "linear-gradient(135deg, #0E3331 0%, #153c3a 100%)",
          }}
        >
          {/* Grid overlay */}
          <div className="video-placeholder-grid"></div>

          <div className="play-button-container">
            <svg
              className="play-button-icon w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="42" fill="none" stroke="#A8823C" strokeWidth="2.5" />
              <path d="M42 34 L68 50 L42 66 Z" fill="#C1572C" style={{ transition: "fill 450ms cubic-bezier(0.22,1,0.36,1)" }} />
            </svg>
          </div>

          <span className="play-label">
            Play Statement
          </span>
        </button>
      )}
    </div>
  );
}
