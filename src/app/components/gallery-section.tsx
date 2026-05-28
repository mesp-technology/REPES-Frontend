"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./gallery-section.module.css";
import Stack from "@/components/Stack";

interface Album {
  id: string;
  title: string;
  desc: string;
  count: number;
  cover: string;
  images: string[];
}

const ALBUMS: Album[] = [
  {
    id: "G-01",
    title: "Interior Enhancements",
    desc: "Vibrant living spaces, perfect window pulls, and flawless color correction.",
    count: 4,
    cover: "/photo-editing-service-section-banner.jpg",
    images: [
      "/photo-editing-service-section-banner.jpg",
      "/virtual-service-section-banner.jpg",
      "/hero-2d-editing.png",
      "/hero-3d-rendering.png",
    ],
  },
  {
    id: "G-02",
    title: "Exterior Enhancements",
    desc: "Pristine lawns, clear blue skies, and clean architectural exposures.",
    count: 3,
    cover: "/hero-2d-editing.png",
    images: [
      "/hero-2d-editing.png",
      "/photo-editing-service-section-banner.jpg",
      "/virtual-service-section-banner.jpg",
    ],
  },
  {
    id: "G-03",
    title: "Virtual Staging Showcases",
    desc: "Scandinavian, modern, and industrial virtual furniture additions.",
    count: 4,
    cover: "/virtual-service-section-banner.jpg",
    images: [
      "/virtual-service-section-banner.jpg",
      "/photo-editing-service-section-banner.jpg",
      "/hero-3d-rendering.png",
      "/hero-2d-editing.png",
    ],
  },
  {
    id: "G-04",
    title: "Twilight & Dusk Enhancements",
    desc: "Dramatic skies, warm glowing interior lights, and beautiful twilight transitions.",
    count: 3,
    cover: "/hero-3d-rendering.png",
    images: [
      "/hero-3d-rendering.png",
      "/hero-2d-editing.png",
      "/photo-editing-service-section-banner.jpg",
    ],
  },
];

export default function GallerySection() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Initialize/reset refs when activeAlbum changes
  useEffect(() => {
    if (activeAlbum) {
      thumbnailRefs.current = new Array(activeAlbum.images.length).fill(null);
    }
  }, [activeAlbum]);

  // Smoothly scroll the container to center the active thumbnail in view
  useEffect(() => {
    if (activeAlbum && thumbnailContainerRef.current) {
      const activeEl = thumbnailRefs.current[activeImageIndex];
      const container = thumbnailContainerRef.current;
      if (activeEl && container) {
        const containerWidth = container.clientWidth;
        const activeWidth = activeEl.clientWidth;
        const activeLeft = activeEl.offsetLeft;
        const targetScrollLeft = activeLeft - containerWidth / 2 + activeWidth / 2;

        container.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeImageIndex, activeAlbum]);

  const openLightbox = (album: Album) => {
    setActiveAlbum(album);
    setActiveImageIndex(0);
  };

  const closeLightbox = useCallback(() => {
    setActiveAlbum(null);
  }, []);

  const nextImage = useCallback(() => {
    if (!activeAlbum) return;
    setActiveImageIndex((prevIndex) =>
      prevIndex === activeAlbum.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [activeAlbum]);

  const prevImage = useCallback(() => {
    if (!activeAlbum) return;
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? activeAlbum.images.length - 1 : prevIndex - 1
    );
  }, [activeAlbum]);

  // Bind keyboard navigation
  useEffect(() => {
    if (!activeAlbum) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeAlbum, closeLightbox, nextImage, prevImage]);

  // Prevent scroll when lightbox modal is active
  useEffect(() => {
    if (activeAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeAlbum]);

  return (
    <section
      className={`${styles.gallery} section-padding`}
      id="galleries"
      aria-label="Our Photo Galleries"
    >
      <div className="section-container">
        <div className={styles.galleryHeader}>
          <span className={styles.galleryTag}>
            PHOTO ALBUMS
          </span>
          <h2 className={styles.galleryTitle}>Our Galleries</h2>
          <p className={styles.gallerySubtitle}>
            Click on any gallery album cover card below to open and inspect our high-resolution real estate photo editing portfolios.
          </p>
        </div>

        <div className={styles.albumsGrid}>
          {ALBUMS.map((album) => (
            <div className={styles.cardWrapper} key={album.title}>
              <article
                className={styles.albumCard}
                onClick={() => openLightbox(album)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(album);
                  }
                }}
                aria-label={`Open ${album.title} gallery containing ${album.count} photos`}
              >
                <div className={styles.cardBg} aria-hidden="true">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    autoplay={true}
                    autoplayDelay={4000 + Math.random() * 1000} // Stagger autoplay
                    sendToBackOnClick={false}
                    cards={album.images.map((img, i) => (
                      <img key={i} src={img} alt={`${album.title} preview`} className="w-full h-full object-cover" />
                    ))}
                  />
                </div>
                <div className={styles.cardOverlay} style={{ pointerEvents: 'none' }} aria-hidden="true" />
  
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <h3 className={styles.albumTitle}>{album.title}</h3>
                  </div>
                </div>
  
                <div className={styles.cardGlow} />
              </article>
            </div>
          ))}
        </div>
      </div>

      {activeAlbum && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeAlbum.title} Gallery Lightbox`}
        >
          <div className={styles.lightboxOverlay} onClick={closeLightbox} aria-hidden="true" />

          <div className={styles.lightboxFrame}>
            <button
              onClick={closeLightbox}
              className={styles.closeBtn}
              aria-label="Close Lightbox Modal"
              type="button"
            >
              <X size={20} />
            </button>

            <div className={styles.lightboxStage}>
              <button
                onClick={prevImage}
                className={styles.navBtn}
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              <div className={styles.imageViewport}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={activeImageIndex}
                  src={activeAlbum.images[activeImageIndex]}
                  alt={`${activeAlbum.title} - Showcase ${activeImageIndex + 1}`}
                  className={styles.activeImage}
                />
              </div>

              <button
                onClick={nextImage}
                className={styles.navBtn}
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className={styles.thumbnailWrapper}>
              <div
                className={styles.thumbnailContainer}
                ref={thumbnailContainerRef}
                role="listbox"
                aria-label="Album Image Thumbnails"
              >
                {activeAlbum.images.map((img, idx) => (
                  <button
                    key={idx}
                    ref={(el) => {
                      thumbnailRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`${styles.thumbnailBtn} ${
                      activeImageIndex === idx ? styles.activeThumbnail : ""
                    }`}
                    role="option"
                    aria-selected={activeImageIndex === idx}
                    aria-label={`View photo ${idx + 1} of ${activeAlbum.images.length}`}
                    type="button"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={styles.thumbnailImg}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
