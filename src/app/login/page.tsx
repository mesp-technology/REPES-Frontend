"use client";

import React from "react";
import styles from "./login.module.css";
import ShowcasePanel from "./components/showcase-panel";
import AuthCard from "./components/auth-card";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* BACKGROUND ACCENTS - Glowing orbs for visual excellence */}
      <div className={styles.bgAccent1} />
      <div className={styles.bgAccent2} />

      {/* LEFT PANEL - Media editing showcase with active auto-sliding slideshow */}
      <ShowcasePanel />

      {/* RIGHT PANEL - Clean glassmorphic modular authentication container */}
      <AuthCard />
    </div>
  );
}
