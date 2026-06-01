"use client";

import { Camera, Clapperboard, PencilRuler, Sofa, ArrowRight } from "lucide-react";
import styles from "./services-section.module.css";

const SERVICES = [
  {
    id: "01",
    label: "MEDIA PRODUCTION",
    tag: "HDR BLENDING",
    Icon: Camera,
    title: "Photo Editing",
    desc: "Professional real estate photo enhancement — HDR blending, sky replacement, virtual twilight, and item removal at scale. Delivering stunning visuals that attract prospective buyers instantly.",
    arrowLabel: "Learn more about photo editing",
    size: "large",
    bgImage: "/photo-editing-service-section-banner.jpg",
  },
  {
    id: "02",
    label: "CINEMATIC",
    tag: "4K & SOCIAL",
    Icon: Clapperboard,
    title: "Video Editing",
    desc: "Cinematic property videos with professional color grading, transitions, custom branding, and licensed music — optimized for listing portals and social media platforms.",
    arrowLabel: "Learn more about video editing",
    size: "small",
    bgImage: "/video-slideshow-service-section-banner.jpg",
  },
  {
    id: "03",
    label: "CAD & SCAN",
    tag: "2D/3D MODELS",
    Icon: PencilRuler,
    title: "Floor Plans",
    desc: "Accurate, clean 2D and 3D floor plans crafted from sketches, blueprints, or laser scans. Fully branded layout options and interactive features to captivate developers and realtors.",
    arrowLabel: "Learn more about floor plans",
    size: "small",
    bgImage: "/hero-3d-rendering.png",
  },
  {
    id: "04",
    label: "INTERIOR DESIGNS",
    tag: "AI VIRTUAL STAGING",
    Icon: Sofa,
    title: "Virtual Staging",
    desc: "Transform empty, cold rooms with ultra-photorealistic virtual furniture and modern décor. Choose from multiple curated design styles (Scandinavian, Modern, Industrial) to match any target market seamlessly.",
    arrowLabel: "Learn more about virtual staging",
    size: "large",
    bgImage: "/virtual-service-section-banner.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className={`${styles.services} section-padding`}
      id="services"
      aria-label="Services Section"
    >
      <div className="section-container">
        <div className={`${styles.servicesHeader} reveal-fade`}>
          <span className={`section-tag-global ${styles.sectionTag}`}>
            OUR SERVICES
          </span>
          <h2 className={styles.sectionTitle}>
            Everything Your Production Needs
          </h2>
          <p className={styles.sectionSubtitle}>
            High-performance media editing solutions tailored for real estate
            photography companies worldwide.
          </p>
        </div>

        <div className={`${styles.servicesGrid} reveal-fade`}>
          {SERVICES.map((service) => {
            const isLarge = service.size === "large";

            return (
              <article
                key={service.title}
                className={`${styles.serviceCard} ${
                  isLarge ? styles.cardLarge : styles.cardSmall
                }`}
              >
                <div
                  className={styles.cardBg}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  aria-hidden="true"
                />
                <div className={styles.cardOverlay} aria-hidden="true" />

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardId}>{service.id}</span>
                      <span className={styles.cardLabel}>{service.label}</span>
                    </div>
                    <span className={styles.cardTag}>{service.tag}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.serviceIconContainer}>
                      <div className={styles.serviceIcon} aria-hidden="true">
                        <service.Icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href="#contact"
                      className={styles.serviceArrow}
                      aria-label={service.arrowLabel}
                    >
                      <span>Explore Service</span>
                      <span className={styles.arrowIcon}>
                        <ArrowRight size={16} />
                      </span>
                    </a>
                  </div>
                </div>

                <div className={styles.cardGlow} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
