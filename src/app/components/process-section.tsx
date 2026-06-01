"use client";

import { Users, Sliders, Send, ShieldCheck } from "lucide-react";
import styles from "./process-section.module.css";

interface ProcessStep {
  index: string;
  label: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    label: "Step 1",
    title: "Consultation and Requirements Gathering",
    desc: "We collaborate closely to define your brand standards, file specifications, custom presets, and turnaround guidelines to ensure absolute creative styling alignment.",
    icon: Users,
  },
  {
    index: "02",
    label: "Step 2",
    title: "Image Editing and Enhancement",
    desc: "Our expert editors meticulously apply advanced HDR blending, precise window pulls, vertical alignment, and twilight enhancements matching your precise guidelines.",
    icon: Sliders,
  },
  {
    index: "03",
    label: "Step 3",
    title: "Final Delivery and Revisions",
    desc: "We deliver your ready-to-publish media assets within your exact turnaround window, offering rapid and unlimited revision iterations to guarantee complete satisfaction.",
    icon: Send,
  },
  {
    index: "04",
    label: "Step 4",
    title: "Quality Control and Review",
    desc: "Every single photograph, video frame, and virtual staging mockup undergoes a rigorous multi-layered QA review by senior supervisors before final sign-off.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section
      className={`${styles.process} section-padding`}
      id="process"
      aria-label="Our Creative Editing Process"
    >
      <div className="section-container">
        <div className={`${styles.processHeader} reveal-fade`}>
          <span className={styles.processTag}>
            WORKFLOW SEQUENCE
          </span>
          <h2 className={styles.processTitle}>How We Work</h2>
          <p className={styles.processSubtitle}>
            Our streamlined four-stage real estate media editing workflow ensures elite quality and fast turnaround times.
          </p>
        </div>

        <div className={`${styles.processGrid} reveal-fade`}>
          {PROCESS_STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <article
                key={step.index}
                className={styles.stepCard}
                tabIndex={0}
                role="group"
                aria-labelledby={`step-title-${step.index}`}
                id={`process-step-${step.index}`}
              >
                <div className={styles.cardBackdropNum} aria-hidden="true">
                  {step.index}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconContainer} aria-hidden="true">
                      <IconComponent size={22} className={styles.icon} />
                    </div>
                    <span className={styles.stepLabel} aria-hidden="true">
                      {step.label}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 id={`step-title-${step.index}`} className={styles.stepTitle}>
                      {step.title}
                    </h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>

                <div className={styles.cardGlow} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
