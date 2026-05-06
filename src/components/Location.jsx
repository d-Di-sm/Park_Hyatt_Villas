import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { proximity } from '../data/content.js';

const IMAGES = [
  { src: '/images/Anima.jpg',       label: 'Ánima Village'       },
  { src: '/images/soho_Cabos.png',  label: 'Soho House Los Cabos' },
  { src: '/images/Cabos02.png',      label: 'Los Cabos'            },
  { src: '/images/Cabos01.png',      label: 'Los Cabos'            },
  { src: '/images/Airport01.jpg',    label: 'SJD Airport'          },
];

export default function Location() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="location" className="location">
      <div className="section-inner">
        <div className="location-grid">
          <div>
            <Reveal as="p" className="section-label">
              Setting
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.1}>
              Where Everything<br /><em>Converges</em>
            </Reveal>
            <Reveal as="p" className="section-body" delay={0.22}>
              Perfectly positioned along the iconic Cabo Corridor within{' '}
              <span className="loc-highlight">Cabo Del Sol</span>, the
              project places you at the center of Baja's most coveted destinations. Just moments
              away, <span className="loc-highlight">Ánima Village</span> offers a curated mix
              of exclusive brands, refined gastronomy and wellness experiences, while{' '}
              <span className="loc-highlight">Soho House Los Cabos</span> brings a globally
              recognized atmosphere of culture, design and community. Surrounded by world-class
              golf and swimmable beaches, this is where lifestyle and connection come together
              effortlessly.
            </Reveal>
            <Reveal className="proximity-list" delay={0.38}>
              {proximity.map((p) => (
                <div className="proximity-item" key={p.name}>
                  <span className="prox-name">{p.name}</span>
                  <span className="prox-dist">{p.dist}</span>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="loc-img-col">
            <div className="map-frame loc-slideshow">
              <AnimatePresence>
                {IMAGES.map((img, i) =>
                  i === idx ? (
                    <motion.img
                      key={img.src}
                      src={img.src}
                      alt={img.label}
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : null
                )}
              </AnimatePresence>
              <div className="loc-slide-label">{IMAGES[idx].label}</div>
              <div className="loc-slide-dots">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    className={`sordo-img-dot${i === idx ? ' active' : ''}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
