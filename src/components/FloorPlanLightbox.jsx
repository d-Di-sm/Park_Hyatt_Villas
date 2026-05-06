import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloorPlanLightbox({ images, initialIndex, onClose }) {
  const [idx, setIdx] = useState(initialIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="lightbox fp-lightbox"
      onClick={handleBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button className="lightbox-close" onClick={onClose}>✕ &nbsp;Close</button>

      <div className="fp-lb-inner">
        <button className="fp-lb-nav fp-lb-prev" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10l6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="fp-lb-img-wrap">
          <img
            key={images[idx].src}
            src={images[idx].src}
            alt={images[idx].sub}
            className="fp-lb-img"
          />
        </div>

        <button className="fp-lb-nav fp-lb-next" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="fp-lb-footer">
        <div className="fp-lb-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`fp-lb-dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <p className="fp-lb-label">{images[idx].sub}</p>
        <p className="fp-lb-counter">{idx + 1} / {images.length}</p>
      </div>
    </motion.div>
  );
}
