"use client";

import { Award, Users, CheckCircle, Clock } from "lucide-react";
import styles from "./about-section.module.css";

const METRICS = [
  { value: "10+", label: "Years Experience", Icon: Award, desc: "Pioneering real estate media post-production since 2016" },
  { value: "200+", label: "Certified Artists", Icon: Users, desc: "Highly skilled digital editors trained in premium styling" },
  { value: "5M+", label: "Photos Delivered", Icon: CheckCircle, desc: "Powering listings that stand out in competitive markets" },
  { value: "24h", label: "Guaranteed SLA", Icon: Clock, desc: "Fast industry turnaround with express same-day delivery options" },
];

export default function AboutSection() {
  return (
    <section className={`${styles.about} section-padding`} id="about" aria-label="About Company">
      <div className="section-container">
        
        {/* Section Header */}
        <div className={`${styles.aboutHeader} reveal-fade`}>
          <span className={`section-tag-global ${styles.aboutTag}`}>COMPANY PROFILE</span>
          <h2 className={styles.aboutTitle}>EXPERIENCE & CAPABILITIES</h2>
          <p className={styles.aboutSubtitle}>
            We deliver state-of-the-art visual post-production services to leading real estate media agencies, digital market platforms, and top-tier brokerages globally.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className={`${styles.metricsGrid} reveal-fade`}>
          {METRICS.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div className={styles.metricHeader}>
                <span className={styles.metricValue}>{metric.value}</span>
                <metric.Icon className={styles.metricIcon} size={28} />
              </div>
              <h3 className={styles.metricLabel}>{metric.label}</h3>
              <p className={styles.metricDesc}>{metric.desc}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
