"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import styles from "./testimonials-section.module.css";

const TESTIMONIALS = [
  {
    quote:
      "Repes transformed our production pipeline. We went from 48-hour turnaround to same-day delivery, and our photographers couldn't be happier with the quality.",
    author: "Sarah Mitchell",
    role: "COO, Premier Real Estate Media",
    initial: "S",
  },
  {
    quote:
      "The scalability is unreal. During our peak season we processed 40,000 images in a single month without a single missed deadline. Game-changer.",
    author: "James Chen",
    role: "Director of Operations, SnapHome",
    initial: "J",
  },
  {
    quote:
      "Their virtual staging service increased our listing engagement by 73%. The quality is indistinguishable from physical staging at a fraction of the cost.",
    author: "Maria Rodriguez",
    role: "VP Marketing, Luxe Properties Group",
    initial: "M",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  /* Auto-rotate every 6 seconds */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section
      className={`${styles.testimonials} section-padding`}
      id="testimonials"
      aria-label="Client testimonials"
    >
      <div className="section-container">
        <div className={styles.testimonialsHeader}>
          <span className={styles.sectionTag}>Testimonials</span>
          <h2 className={styles.sectionTitle}>Trusted by Industry Leaders</h2>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon} aria-hidden="true">
              <Quote size={40} />
            </div>
            <blockquote className={styles.quoteText}>{t.quote}</blockquote>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar} aria-hidden="true">
                {t.initial}
              </div>
              <cite className={styles.authorName}>{t.author}</cite>
              <span className={styles.authorRole}>{t.role}</span>
            </div>
          </div>

          {/* Dots */}
          <div className={styles.carouselDots} role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === active ? styles.dotActive : ""
                }`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
