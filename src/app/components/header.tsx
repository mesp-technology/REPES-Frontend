"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      role="banner"
    >
      <div className={styles.headerInner}>
        <a href="#" className={styles.logo} aria-label="Repes Home">
          <img src="/repes-logo.svg" alt="Repes logo" className={styles.logoImage} />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className={styles.ctaButton}>
            Get Started
          </a>
        </nav>

        <button
          className={`${styles.mobileToggle} ${mobileOpen ? styles.mobileToggleOpen : ""
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""
          }`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta"
          className={styles.ctaButton}
          onClick={() => setMobileOpen(false)}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
