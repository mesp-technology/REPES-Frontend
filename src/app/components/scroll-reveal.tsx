"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60px 0px", // triggers slightly before entering the screen for smooth flow
      threshold: 0.08,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Once animated, stop observing this element so the animation only plays once on entry
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const elements = document.querySelectorAll(".reveal-fade");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // purely behavior-driven, no visual UI
}
