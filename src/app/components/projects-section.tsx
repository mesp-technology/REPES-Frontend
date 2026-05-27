"use client";

import { useState } from "react";
import { ArrowRight, Image as ImageIcon, Video, Sofa, PencilRuler } from "lucide-react";
import styles from "./projects-section.module.css";

const CATEGORIES = ["All", "Photo Editing", "Video Editing", "Virtual Staging", "Floor Plans"];

const PROJECTS = [
  {
    id: "P-01",
    category: "Photo Editing",
    Icon: ImageIcon,
    title: "Luxury Hillside Villa",
    desc: "High-end exposure blending, foliage enhancement, and wire removal for a multi-million dollar listing.",
    tat: "12h Delivery",
    tag: "HDR Blending",
    image: "/photo-editing-service-section-banner.jpg",
  },
  {
    id: "P-02",
    category: "Virtual Staging",
    Icon: Sofa,
    title: "Modern Scandinavian Condo",
    desc: "Staged a vacant metropolitan penthouse with photorealistic contemporary furniture and lighting modeling.",
    tat: "18h Delivery",
    tag: "Virtual Staging",
    image: "/virtual-service-section-banner.jpg",
  },
  {
    id: "P-03",
    category: "Video Editing",
    Icon: Video,
    title: "Sunset Estate Video Tour",
    desc: "Cinematic walkthrough featuring advanced stabilization, customized brand graphics, and warm color grading.",
    tat: "24h Delivery",
    tag: "4K Video Tour",
    image: "/hero-video-production.png",
  },
  {
    id: "P-04",
    category: "Floor Plans",
    Icon: PencilRuler,
    title: "Commercial Office Blueprint",
    desc: "Turned laser scanner files into a crisp, high-accuracy 3D visual plan and detailed architectural models.",
    tat: "12h Delivery",
    tag: "3D Floor Plan",
    image: "/hero-3d-rendering.png",
  },
  {
    id: "P-05",
    category: "Photo Editing",
    Icon: ImageIcon,
    title: "Penthouse Dusk Conversion",
    desc: "Virtual twilight skies, warm interior light glow addition, and window exposure pull for optimal dynamic range.",
    tat: "12h Delivery",
    tag: "Day-To-Dusk",
    image: "/hero-2d-editing.png",
  },
  {
    id: "P-06",
    category: "Virtual Staging",
    Icon: Sofa,
    title: "Industrial Loft Living Room",
    desc: "Converted an empty concrete warehouse interior into a warm, high-end loft spaces with wood and leather staging.",
    tat: "18h Delivery",
    tag: "Industrial Style",
    image: "/virtual-service-section-banner.jpg",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, 3);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      className={`${styles.projects} section-padding`}
      id="portfolio"
      aria-label="Our Projects Portfolio"
    >
      <div className="section-container">
        <div className={styles.projectsHeader}>
          <span className={styles.projectsTag}>
            RECENT WORK
          </span>
          <h2 className={styles.projectsTitle}>Our Editing Showcases</h2>
          <p className={styles.projectsSubtitle}>
            Explore actual examples of our high-quality photo enhancements, 
            cinematic video renders, floor plans, and virtual staging.
          </p>
        </div>

        <div className={styles.filterNav} role="tablist" aria-label="Filter Projects By Category">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
                onClick={() => handleCategoryChange(category)}
                role="tab"
                aria-selected={isActive}
                aria-controls="portfolio-grid"
                id={`tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div 
          className={styles.projectsGrid} 
          id="portfolio-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {visibleProjects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              />
              <div className={styles.cardOverlay} aria-hidden="true" />

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardId}>{project.id}</span>
                    <span className={styles.cardLabel}>{project.category}</span>
                  </div>
                  <span className={styles.cardTag}>{project.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.projectIconContainer}>
                    <div className={styles.projectIcon} aria-hidden="true">
                      <project.Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.tatLabel}>{project.tat}</span>
                  <a
                    href="#contact"
                    className={styles.projectLink}
                    aria-label={`Inquire about ${project.title}`}
                  >
                    <span>View Details</span>
                    <span className={styles.arrowIcon}>
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>

              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>

        <div className={styles.exploreActionContainer}>
          <a
            href="#"
            className={styles.exploreAllBtn}
            aria-label="Explore all projects in our portfolio"
          >
            <span>Explore All Projects</span>
            <span className={styles.exploreArrow}>
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
