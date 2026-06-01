"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Star, Quote } from "lucide-react";
import styles from "./testimonials-section.module.css";

// Dynamically import the Carousel component with SSR disabled
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

const TESTIMONIALS_DATA = [
  {
    id: 1,
    title: "Sarah Mitchell",
    role: "Founder, PeakMedia Real Estate",
    description: "Partnering with them has been a game-changer for our agency. The manual quality blending is consistently flawless, and our turnaround time has dropped from 48 hours to less than 18 hours. Absolutely stellar support.",
    icon: (
      <div className="testimonial-header-inner">
        <Quote size={28} className="testimonial-quote-icon" />
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#C9B100" color="#C9B100" />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "James Chen",
    role: "Director of Operations, SnapHome",
    description: "The scalability is unreal. During our peak season we processed 40,000 images in a single month without a single missed deadline. Game-changer.",
    icon: (
      <div className="testimonial-header-inner">
        <Quote size={28} className="testimonial-quote-icon" />
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#C9B100" color="#C9B100" />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Maria Rodriguez",
    role: "VP Marketing, Luxe Properties Group",
    description: "Their virtual staging service increased our listing engagement by 73%. The quality is indistinguishable from physical staging at a fraction of the cost.",
    icon: (
      <div className="testimonial-header-inner">
        <Quote size={28} className="testimonial-quote-icon" />
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#C9B100" color="#C9B100" />
          ))}
        </div>
      </div>
    )
  }
];

export default function TestimonialsSection() {
  return (
    <section
      className={`${styles.testimonials} section-padding`}
      id="testimonials"
      aria-label="Client testimonials"
    >
      <div className="section-container">
        {/* Centered Heading Section */}
        <div className={`${styles.sectionHeader} reveal-fade`}>
          <span className={`section-tag-global ${styles.sectionTag}`}>TESTIMONIALS</span>
          <h2 className={styles.sectionTitle}>Trusted by Leading Real Estate Networks</h2>
          <p className={styles.sectionSubtitle}>
            Read what media agency founders, operations directors, and real estate photography business owners say about partnering with us.
          </p>
        </div>

        {/* Dynamic Carousel Component */}
        <div className={`${styles.carouselWrapper} reveal-fade`}>
          <Carousel
            items={TESTIMONIALS_DATA}
            autoplay={true}
            autoplayDelay={6000}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}
