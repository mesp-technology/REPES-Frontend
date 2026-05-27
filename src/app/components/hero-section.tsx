"use client";

import { useState, useCallback, useEffect } from "react";
import { Image, Box, Video, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./hero-section.module.css";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/hero-2d-editing.png",

  },
  {
    id: 2,
    image: "/hero-3d-rendering.png",

  },
  {
    id: 3,
    image: "/hero-video-production.png",

  },
];

const TAG_LINES = [
  "Real Estate Media Solutions",
  "Comprehensive Real Estate Imagery Solutions",
  "2D, 3D & Video Editing",
  "Professional Media Production",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [tagIndex, setTagIndex] = useState(0);

  /* Touch / Drag Gesture State */
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    setPrevActive(active);
    setActive(newIndex);
  }, [active]);

  const next = useCallback(() => {
    changeSlide((active + 1) % HERO_SLIDES.length);
  }, [active, changeSlide]);

  const prev = useCallback(() => {
    changeSlide((active - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [active, changeSlide]);

  /* Auto-rotate slides every 5s */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  /* Cycle tags every 3.5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % TAG_LINES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* Gesture Handlers */
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleSwipeEnd = useCallback(() => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }

    // Reset
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  }, [touchStart, touchEnd, next, prev]);

  const handleTouchEnd = () => {
    handleSwipeEnd();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleSwipeEnd();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleSwipeEnd();
    }
  };

  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.heroBgGlow} aria-hidden="true" />
      <div className={styles.heroGridOverlay} aria-hidden="true" />

      <div className={`${styles.heroInner} section-container`}>
        <div className={styles.heroLeft}>
          <span className={styles.heroTag}>
            <span key={tagIndex} className={styles.heroTagText}>
              {TAG_LINES[tagIndex]}
            </span>
          </span>

          <h1 className={styles.heroTitle}>
            Comprehensive{" "}
            <span className={styles.heroTitleAccent}>Real Estate</span>
            <br />
            Media Solutions
          </h1>

          <p className={styles.heroSubtitle}>
            High-impact photo editing, video editing, floor plans, and 3D
            visualization services. Tech-driven solutions ensuring rapid
            turnaround, consistent quality, and limitless scalability.
          </p>

          <div className={styles.heroCtas}>
            <a href="#cta" className={styles.heroPrimaryBtn}>
              <span>Start Now</span>
              <ArrowRight size={18} className={styles.btnArrow} />
            </a>
            <a href="#services" className={styles.heroSecondaryBtn}>
              Explore Services
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.carouselContainer}>
            <div className={styles.perspectiveGridMesh} aria-hidden="true" />

            <div className={styles.perspectiveShadowBase} aria-hidden="true" />

            <div className={styles.carouselWrapper}>
              {HERO_SLIDES.map((s, i) => {
                const isActive = i === active;
                const isExited = i === prevActive;

                if (!isActive && !isExited) return null;

                return (
                  <div
                    key={s.id}
                    className={`${styles.carouselSlide} ${isActive ? styles.slideActive : ""} ${isExited ? styles.slideExited : ""}`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                  >
                    <img
                      src={s.image}
                      alt="image"
                      className={styles.slideImage}
                      draggable="false"
                    />
                    <div className={styles.slideOverlay} />

                    <button
                      className={`${styles.navBtn} ${styles.navBtnLeft}`}
                      onClick={prev}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      className={`${styles.navBtn} ${styles.navBtnRight}`}
                      onClick={next}
                      aria-label="Next slide"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className={styles.carouselDots}>
                      {HERO_SLIDES.map((subSlide, subIndex) => (
                        <button
                          key={subSlide.id}
                          className={`${styles.dot} ${subIndex === active ? styles.dotActive : ""}`}
                          onClick={() => changeSlide(subIndex)}
                          aria-label={`Slide ${subIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroBanner} role="marquee">
        <div className={styles.bannerTrack}>
          <div className={styles.bannerItem}><Image size={16} /> <span>2D Photo Editing</span></div>
          <div className={styles.bannerItem}><Box size={16} /> <span>3D Virtual Staging</span></div>
          <div className={styles.bannerItem}><Video size={16} /> <span>Cinematic Property Video</span></div>
          <div className={styles.bannerItem}><Image size={16} /> <span>HDR Color Correction</span></div>
          <div className={styles.bannerItem}><Box size={16} /> <span>Floor Plan & Sketching</span></div>
          <div className={styles.bannerItem}><Video size={16} /> <span>Drone Footage Editing</span></div>
          <div className={styles.bannerItem}><Image size={16} /> <span>2D Photo Editing</span></div>
          <div className={styles.bannerItem}><Box size={16} /> <span>3D Virtual Staging</span></div>
          <div className={styles.bannerItem}><Video size={16} /> <span>Cinematic Property Video</span></div>
          <div className={styles.bannerItem}><Image size={16} /> <span>HDR Color Correction</span></div>
          <div className={styles.bannerItem}><Box size={16} /> <span>Floor Plan & Sketching</span></div>
          <div className={styles.bannerItem}><Video size={16} /> <span>Drone Footage Editing</span></div>
        </div>
      </div>
    </section>
  );
}
