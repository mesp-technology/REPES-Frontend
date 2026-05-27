import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";
import type { ComponentType } from "react";

const FOOTER_LINKS = {
  Services: [
    { label: "Photo Editing", href: "#services" },
    { label: "Video Editing", href: "#services" },
    { label: "Floor Plans", href: "#services" },
    { label: "Virtual Staging", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#features" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const SOCIAL_LINKS: { label: string; Icon: ComponentType<{ className?: string; size?: number }>; href: string }[] = [
  { label: "Facebook", Icon: FaFacebook, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "#" },
  { label: "LinkedIn", Icon: FaLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} section-padding`} role="contentinfo">
      <div className="section-container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <a href="#" className={styles.footerLogoLink} aria-label="Repes Home">
                <img src="/repes-logo-light.svg" alt="Repes logo" className={styles.footerLogoImage} />
              </a>
            </div>
            <p className={styles.footerBrandDesc}>
              High-impact real estate media editing services for photography
              companies worldwide. Tech-driven, scalable, reliable.
            </p>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>{title}</h3>
              {links.map((link) => (
                <a key={link.label} href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Repes. All rights reserved.
          </p>
          <div className={styles.footerContactInfo}>
            <p className={styles.footerAddress}>
              Kinh Mon District, Hai Duong
            </p>
            <div className={styles.footerEmails}>
              <a href="mailto:sales@repes.local" className={styles.footerEmailLink}>
                sales@repes.local
              </a>
              <span className={styles.footerDivider}>|</span>
              <a href="mailto:sales.repes@gmail.com" className={styles.footerEmailLink}>
                sales.repes@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
