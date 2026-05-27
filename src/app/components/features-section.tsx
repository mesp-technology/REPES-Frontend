import { Zap, Sparkles, TrendingUp, Check } from "lucide-react";
import styles from "./features-section.module.css";
import type { LucideIcon } from "lucide-react";

const FEATURES: {
  tag: string;
  title: string;
  desc: string;
  points: string[];
  Icon: LucideIcon;
  reverse: boolean;
}[] = [
  {
    tag: "Speed",
    title: "Lightning-Fast Turnaround",
    desc: "Our tech-driven pipeline delivers edited assets within hours, not days. Automated quality checks and parallel workflows ensure you never miss a deadline.",
    points: [
      "Same-day delivery for standard edits",
      "24/7 production across global offices",
      "Real-time order tracking dashboard",
    ],
    Icon: Zap,
    reverse: false,
  },
  {
    tag: "Quality",
    title: "Consistently High Quality",
    desc: "AI-assisted quality control paired with expert human review guarantees pixel-perfect results that match your brand guidelines every single time.",
    points: [
      "Multi-layer quality assurance process",
      "Style guide matching & brand compliance",
      "99.5% first-submission approval rate",
    ],
    Icon: Sparkles,
    reverse: true,
  },
  {
    tag: "Scale",
    title: "Built to Scale With You",
    desc: "From 100 to 100,000 images per month — our infrastructure scales elastically. No setup fees, no long-term contracts, predictable per-image pricing.",
    points: [
      "Elastic capacity — scale on demand",
      "Dedicated account managers for enterprise",
      "API integration for automated workflows",
    ],
    Icon: TrendingUp,
    reverse: false,
  },
];

export default function FeaturesSection() {
  return (
    <section
      className={`${styles.features} section-padding`}
      id="features"
      aria-label="Features"
    >
      <div className="section-container">
        {FEATURES.map((feature) => (
          <div
            key={feature.tag}
            className={`${styles.featureRow} ${
              feature.reverse ? styles.featureRowReverse : ""
            }`}
          >
            {/* Text */}
            <div className={styles.featureContent}>
              <span className={styles.featureTag}>{feature.tag}</span>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDesc}>{feature.desc}</p>
              <ul className={styles.featurePoints}>
                {feature.points.map((point) => (
                  <li key={point} className={styles.featurePoint}>
                    <span
                      className={styles.featurePointIcon}
                      aria-hidden="true"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className={styles.featureVisual} aria-hidden="true">
              <div className={styles.featureVisualInner}>
                <feature.Icon size={64} strokeWidth={1} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
