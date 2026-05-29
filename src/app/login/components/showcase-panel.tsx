"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "../login.module.css";
import ShapeGrid from "@/components/ShapeGrid";
import Typewriter from "./typewriter";

const SHOWCASE_SLIDES = [
  {
    id: 1,
    title: "High-End Photo Editing",
    subtitle: "2D Image Enhancement & Blending",
    description: "Flawless color correction, sky replacement, HDR blending, and meticulous object removal for professional real estate presentations.",
    stat: "24h Turnaround"
  },
  {
    id: 2,
    title: "Virtual Staging",
    subtitle: "3D Furnishing & Rendering",
    description: "Transform cold, empty properties into stunning, photorealistic, fully furnished spaces that inspire emotion and speed up sales.",
    stat: "99.8% Accuracy"
  },
  {
    id: 3,
    title: "Cinematic Video Tours",
    subtitle: "Professional Video Slideshows & Editing",
    description: "High-definition real estate video editing with seamless transitions, sound design, color grading, and dynamic aerial integration.",
    stat: "Global Delivery"
  }
];

export default function ShowcasePanel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.leftPanel} aria-label="REPES Media Editing Showcase">
      {/* ShapeGrid background layer */}
      <div className={styles.showcaseBackground}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ShapeGrid
            borderColor="rgba(11, 12, 38, 0.08)"
            hoverFillColor="rgba(11, 12, 38, 0.04)"
            hoverTrailAmount={4}
            speed={0.5}
          />
        </div>
      </div>

      {/* Top brand header logo */}
      <div className={`${styles.showcaseLogo} ${styles.fadeUpElement} ${styles.delay1}`}>

        <Link
          href="/"
          className={styles.backButton}
          aria-label="Return to home page"
          id="btn-back-home"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Dynamic content showcase with animated transition */}
      <div className={`${styles.showcaseContent} ${styles.fadeUpElement} ${styles.delay2}`}>
        {SHOWCASE_SLIDES.map((slide, index) => {
          if (index !== currentSlide) return null;
          return (
            <div key={slide.id} style={{ animation: `${styles.fadeIn} 0.6s ease forwards` }}>
              <div className={styles.badge}>
                <Typewriter text={slide.subtitle} />
              </div>

              <h1 className={styles.showcaseTitle}>{slide.title}</h1>

              <p className={styles.showcaseDesc}>{slide.description}</p>

              <div className={styles.metricsContainer}>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Ecosystem Metric</span>
                  <span className={styles.metricValue}>{slide.stat}</span>
                </div>
                <div className={styles.metricDivider} />
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Quality Grade</span>
                  <span className={styles.metricValue}>ISO Consistent</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Dots slide navigator indicators */}
        <div className={styles.indicators}>
          {SHOWCASE_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.indicatorDot} ${index === currentSlide ? styles.indicatorDotActive : styles.indicatorDotInactive
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Footer brand info */}
      <div className={`${styles.showcaseFooter} ${styles.fadeUpElement} ${styles.delay3}`}>
        <span>
          &copy; {new Date().getFullYear()} REPES. All rights reserved. Professional Real Estate Media Editing
          Platform.
        </span>
      </div>
    </section>
  );
}
