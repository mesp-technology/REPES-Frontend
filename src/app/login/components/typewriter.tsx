"use client";

import React, { useState, useEffect } from "react";
import styles from "../login.module.css";

interface TypewriterProps {
  text: string;
}

export default function Typewriter({ text }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45); // 45ms per letter typing speed
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayedText}
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}
