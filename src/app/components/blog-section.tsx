"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import styles from "./blog-section.module.css";

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  coverImage: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    category: "TIPS & TRICKS",
    date: "May 20, 2026",
    readTime: "5 Min Read",
    title: "Mastering Twilight Photography: Essential Tips for Real Estate Photographers",
    desc: "Learn the critical camera settings, perfect golden-hour timing hacks, and advanced multi-exposure blending workflows required to capture spectacular dusk shots.",
    coverImage: "/photo-editing-service-section-banner.jpg",
  },
  {
    id: "post-2",
    category: "INDUSTRY TRENDS",
    date: "May 15, 2026",
    readTime: "4 Min Read",
    title: "Why AI-Assisted Virtual Staging is Transforming Property Marketing",
    desc: "Discover how photorealistic digital furniture additions save agents thousands in physical staging bills while boosting active MLS listing clicks by over 40%.",
    coverImage: "/virtual-service-section-banner.jpg",
  },
  {
    id: "post-3",
    category: "VIDEO GUIDES",
    date: "May 10, 2026",
    readTime: "6 Min Read",
    title: "The Ultimate Cinematic Real Estate Video Production Checklist",
    desc: "An actionable walkthrough covering seamless drone gimbal orbits, interior speed ramps, modern pacing styles, and high-performance post-production exports.",
    coverImage: "/hero-3d-rendering.png",
  },
];

export default function BlogSection() {
  return (
    <section
      className={`${styles.blog} section-padding`}
      id="blog"
      aria-label="Explore Our Blog"
    >
      <div className={styles.blogGlow} aria-hidden="true" />

      <div className="section-container">
        <div className={`${styles.blogHeader} reveal-fade`}>
          <span className={styles.blogTag}>
            OUR NEWS
          </span>
          <h2 className={styles.blogTitle}>Explore Our Blog</h2>
          <p className={styles.blogSubtitle}>
            Stay informed with the latest insights, tutorials, and creative breakthroughs in the real estate media editing industry.
          </p>
        </div>

        <div className={`${styles.blogGrid} reveal-fade`}>
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className={styles.blogCard}
              tabIndex={0}
              role="group"
              aria-labelledby={`blog-title-${post.id}`}
            >
              <div className={styles.imageWrapper}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                  aria-hidden="true"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
                <span className={styles.categoryBadge}>{post.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <Calendar size={12} className={styles.metaIcon} />
                    {post.date}
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={12} className={styles.metaIcon} />
                    {post.readTime}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 id={`blog-title-${post.id}`} className={styles.articleTitle}>
                    {post.title}
                  </h3>
                  <p className={styles.articleDesc}>{post.desc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={`/blog/${post.id}`}
                    className={styles.readMoreLink}
                    aria-label={`Read full article: ${post.title}`}
                    onClick={(e) => e.preventDefault()} // Keep visual sandbox-only active click
                  >
                    <span>Read Article</span>
                    <span className={styles.arrowIcon}>
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>

              <div className={styles.cardGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
