"use client";

import {
  FaCottonBureau,
  FaWaze,
  FaFreeCodeCamp,
  FaBattleNet,
  FaAngellist,
  FaAudible,
} from "react-icons/fa";
import styles from "./stats-section.module.css";

const CHOOSE_ITEMS = [
  {
    Icon: FaCottonBureau,
    title: "Best Service",
    desc: "Personalized account management and reliable client care tailored specifically for real estate media agencies.",
  },
  {
    Icon: FaWaze,
    title: "Best Quality",
    desc: "Vibrant visual outputs powered by state-of-the-art AI filters, manual blending, and double QA review procedures.",
  },
  {
    Icon: FaFreeCodeCamp,
    title: "Best Delivery",
    desc: "Industry-leading express delivery timelines, ensuring properties go live on listing portals ahead of schedule.",
  },
  {
    Icon: FaBattleNet,
    title: "Professionalism",
    desc: "A strictly coordinated team of hundreds of certified digital artists who respect your unique edit guidelines.",
  },
  {
    Icon: FaAngellist,
    title: "Experience & Skills",
    desc: "Unmatched expertise built over editing millions of commercial and residential frames for world-leading property firms.",
  },
  {
    Icon: FaAudible,
    title: "Customer Focus",
    desc: "Highly adaptable, customizable delivery volumes, tailored formats, and seamless platform integrations.",
  },
];

export default function StatsSection() {
  return (
    <section
      className={`${styles.whyChoose} section-padding`}
      id="why-choose"
      aria-label="Why Choose Us Section"
    >
      <div className="section-container">
        <div className={`${styles.whyHeader} reveal-fade`}>
          <span className={`section-tag-global ${styles.whyTag}`}>
            BEST SERVICES
          </span>
          <h2 className={styles.whyTitle}>WHY CHOOSE US</h2>
          <p className={styles.whySubtitle}>
            We combine high-performance operational systems with creative excellence
            to support premier media companies worldwide.
          </p>
        </div>

        <div className={`${styles.whyGrid} reveal-fade`}>
          {CHOOSE_ITEMS.map((item) => (
            <article key={item.title} className={styles.whyCard}>
              <div className={styles.iconContainer}>
                <item.Icon className={styles.brandIcon} size={28} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>

              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
