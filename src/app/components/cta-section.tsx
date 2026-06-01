"use client";

import { Send } from "lucide-react";
import styles from "./cta-section.module.css";

export default function CtaSection() {
  return (
    <section
      className={styles.cta}
      id="contact"
      aria-label="Contact Us Today"
    >
      <div className={styles.ctaInner}>
        <div className={styles.ctaGlow} aria-hidden="true" />

        <div className={`${styles.ctaContent} reveal-fade`}>
          <span className={styles.ctaTag}>
            LET&apos;S START WITH US
          </span>
          
          <h2 className={styles.ctaTitle}>
            Image Editing Real Estate Service
          </h2>
          
          <p className={styles.ctaDesc}>
            Contact us today to learn more about Our Image Editing Real Estate and how we can help you achieve your goals.
          </p>

          <form
            className={styles.ctaForm}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact submission form"
          >
            <label htmlFor="cta-email" className="sr-only">
              Your email address
            </label>
            <input
              id="cta-email"
              type="email"
              className={styles.ctaInput}
              placeholder="Enter your email address"
              required
              autoComplete="email"
            />
            <button type="submit" className={styles.ctaSubmit}>
              Submit Inquiry <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
