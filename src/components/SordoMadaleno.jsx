import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';

const IMAGES = [
  '/images/SM01.jpg',
  '/images/SM02.jpg',
  '/hotel/i26.png',
  '/hotel/i27.png',
  '/images/Soma01.jpg',
  '/images/Soma02.jpg',
];

const PANELS = [
  {
    num: 'SORDO MADALENO',
    title: 'A Trajectory of',
    accent: 'Architectural Mastery',
    body: [
      'Rooted in more than eight decades of architectural mastery, Sordo Madaleno brings a distinctly modern Mexican vision to the villas and residences of Park Hyatt Los Cabos.',
      "Designed to honor Cabo's striking duality—the desert's sculpted terrain and the tranquil Sea of Cortez—the project moves beyond the region's traditional resort vernacular to create a sense of true belonging.",
    ],
  },
  {
    num: 'PARK HYATT',
    title: 'A Legacy of',
    accent: 'Refined Hospitality',
    body: [
      'Park Hyatt sets the standard for understated luxury, where every detail—from architecture to service—is designed to create experiences that feel personal, elevated, and timeless. Each property reflects its destination, blending local culture and artistry with world-class amenities.',
      'More than a hotel, Park Hyatt is a sanctuary for those who seek refined living, curated experiences, and a sense of place that is as unique as the traveler themselves.',
    ],
    callout: 'Where luxury is personal.',
  },
  {
    num: 'SOMA',
    tabLabel: 'SHAPING TRANSFORMATION',
    title: 'Designing from a',
    accent: 'smarter perspective',
    body: [
      'SOMA brings a global perspective to elevate local experiences. Design excellence is embedded in its DNA, forming the foundation for innovative real estate strategies that not only inspire people, but also shape cities and activate communities.',
      'Built on over 50 years of experience and a deep understanding of what drives change in the built environment, SOMA responds to the needs of each era, consistently demonstrating an unparalleled vision in crafting forward-thinking real estate solutions.',
    ],
  },
];

const panelVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit:  { opacity: 0, y: -16 },
};

export default function SordoMadaleno() {
  const [imgIdx,   setImgIdx]   = useState(0);
  const [panel,    setPanel]    = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextImg = useCallback(
    () => setImgIdx((i) => (i + 1) % IMAGES.length),
    []
  );

  useEffect(() => {
    const t = setInterval(nextImg, 5000);
    return () => clearInterval(t);
  }, [nextImg]);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setTimeout(() => {
      setPanel((p) => (p + 1) % PANELS.length);
    }, 7000);
    return () => clearTimeout(t);
  }, [panel, autoPlay]);

  const handlePanel = (i) => {
    setPanel(i);
    setAutoPlay(false);
  };

  const active = PANELS[panel];

  return (
    <section id="sordo-madaleno" className="sordo">
      <div className="sordo-split">

        {/* ── Content ── */}
        <div className="sordo-content-col">
          <Reveal as="p" className="section-label" delay={0.05}>
            The Creators
          </Reveal>

          {/* Tab nav */}
          <div className="sordo-tabs">
            {PANELS.map((p, i) => (
              <button
                key={i}
                className={`sordo-tab${panel === i ? ' active' : ''}`}
                onClick={() => handlePanel(i)}
              >
                <span className="sordo-tab-num">{p.num}</span>
                <span className="sordo-tab-label">{p.tabLabel || p.accent}</span>
              </button>
            ))}
          </div>

          {/* Animated panel */}
          <div className="sordo-panel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel}
              className="sordo-panel"
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <h2 className="sordo-title">
                {active.title}<br /><em>{active.accent}</em>
              </h2>
              {active.body.map((text, i) => (
                <p className="sordo-body" key={i}>{text}</p>
              ))}
              {active.callout && (
                <p className="sordo-callout">{active.callout}</p>
              )}
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="sordo-progress">
            {PANELS.map((_, i) => (
              <button
                key={i}
                className={`sordo-pip${panel === i ? ' active' : ''}`}
                onClick={() => handlePanel(i)}
              />
            ))}
          </div>
        </div>

        {/* ── Image slider ── */}
        <div className="sordo-img-col">
          <AnimatePresence>
            {IMAGES.map((src, i) =>
              i === imgIdx ? (
                <motion.img
                  key={src}
                  src={src}
                  alt="Sordo Madaleno architecture"
                  className="sordo-slide-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  loading="lazy"
                />
              ) : null
            )}
          </AnimatePresence>

          {/* Image dots */}
          <div className="sordo-img-dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`sordo-img-dot${i === imgIdx ? ' active' : ''}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>

          <div className="sordo-img-credit">
            Sordo Madaleno Arquitectos · Casa Cozumel © Rafael Gamo
          </div>
        </div>

      </div>
    </section>
  );
}
