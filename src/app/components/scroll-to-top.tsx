"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./scroll-to-top.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const isMobileRef = useRef(false);

  useEffect(() => {

    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 768;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ticked = false;

    const handleScroll = () => {
      if (!ticked) {
        window.requestAnimationFrame(() => {

          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = window.innerHeight;
          const scrollableHeight = docHeight - winHeight;

          // Toggle visibility (show after 300px of scrolling)
          setIsVisible(scrollY > 300);

          // Calculate scroll progress percentage (0 to 1)
          if (scrollableHeight > 0) {
            const rawProgress = scrollY / scrollableHeight;
            setProgress(Math.min(Math.max(rawProgress, 0), 1));
          } else {
            setProgress(0);
          }

          ticked = false;
        });

        ticked = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount in case page is already scrolled
    handleScroll();

    return () => {

      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      console.log("pageshow", e.persisted);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Determine current circumference based on responsive state
  const radius = isMobileRef.current ? 24 : 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div
      className={`${styles.btnWrapper} ${isVisible ? styles.visible : ""}`}
      role="presentation"
    >
      <button
        onClick={scrollToTop}
        className={styles.scrollButton}
        aria-label="Scroll back to top of the page"
        type="button"
      >
        <svg
          className={styles.progressRing}
          width={isMobileRef.current ? 52 : 60}
          height={isMobileRef.current ? 52 : 60}
          aria-hidden="true"
        >
          <circle
            className={styles.progressRingCircle}
            cx={isMobileRef.current ? 26 : 30}
            cy={isMobileRef.current ? 26 : 30}
            r={radius}
            style={{
              strokeDasharray: `${circumference}`,
              strokeDashoffset: `${strokeDashoffset}`,
            }}
          />
        </svg>

        <span className={styles.arrowIcon}>
          <ArrowUp size={isMobileRef.current ? 20 : 24} strokeWidth={2.5} />
        </span>
      </button>

      <span className={styles.tooltip} aria-hidden="true">
        SCROLL TO TOP
      </span>
    </div>
  );
}
