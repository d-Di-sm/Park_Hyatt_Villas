import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { hotelImages } from '../data/content.js';

function getVisible() {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 900) return 2;
  return 4;
}

const GOLF_IMAGES = [
  '/hotel/Tee01.jpg',
  '/hotel/Tee02.jpg',
  '/hotel/Tee03.jpg',
  '/hotel/i28.png',
];

export default function Amenities({ onSelect }) {
  const [visible, setVisible] = useState(getVisible);
  const [current, setCurrent] = useState(0);
  const max = Math.max(0, hotelImages.length - visible);

  useEffect(() => {
    const onResize = () => {
      const v = getVisible();
      setVisible(v);
      setCurrent(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const next = useCallback(() => setCurrent((c) => (c >= max ? 0 : c + 1)), [max]);
  const prev = () => setCurrent((c) => (c <= 0 ? max : c - 1));

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const [golfIdx, setGolfIdx] = useState(0);
  const nextGolf = useCallback(() => setGolfIdx((i) => (i + 1) % GOLF_IMAGES.length), []);
  useEffect(() => {
    const t = setInterval(nextGolf, 5000);
    return () => clearInterval(t);
  }, [nextGolf]);

  return (
    <section id="amenities" className="hotel-slider">
      <div className="slider-header">
        <Reveal as="p" className="section-label">
          Amenities
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.1}>
          Hotel <em>Amenities</em>
        </Reveal>
      </div>
      <div className="slider-track-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
        >
          {hotelImages.map((src, i) => (
            <div
              className="slider-slide"
              key={src + i}
              style={{ flex: `0 0 ${100 / visible}%` }}
              onClick={() => onSelect?.({ src, alt: 'Hotel view' })}
            >
              <img src={src} alt="Hotel view" loading="lazy" />
            </div>
          ))}
        </div>
        <button className="vc-btn vc-prev" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9l6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="vc-btn vc-next" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 3l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="vc-dots">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            className={`vc-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="amenities-counter">
        <span className="vc-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="vc-counter-sep" />
        <span className="vc-counter-total">{String(max + 1).padStart(2, '0')}</span>
      </div>

      {/* ── Hotel amenities bullets ── */}
      <div className="amenities-bullets-section">
        <div className="section-inner">
          <Reveal as="p" className="section-label" delay={0.05}>
            Hotel Amenities
          </Reveal>
          <div className="fp-features-grid">
            <Reveal as="ul" className="fp-features-list" delay={0.15}>
              {['Nail & Hair Salon', 'Fitness Center & Ludic Pool', 'Sauna & Steam cabins', 'Kids Club', 'Indoor & outdoor yoga areas', '10 treatment rooms'].map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </Reveal>
            <Reveal as="ul" className="fp-features-list" delay={0.28}>
              {['Pools', 'Two restaurants & Bar', 'Beach club', 'Market', 'Event spaces'].map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </Reveal>
          </div>
          <Reveal className="amenities-notes" delay={0.4}>
            <p>Preferred rates &amp; services are reserved for owners. *</p>
<p className="amenities-disclaimer">*Restrictions may apply</p>
          </Reveal>
        </div>
      </div>

      {/* ── Golf amenity feature ── */}
      <div className="golf-split">
        <div className="golf-content-col">
          <Reveal as="p" className="section-label" delay={0.05}>
            The Course
          </Reveal>
          <Reveal as="h2" className="section-title golf-title" delay={0.15}>
            Tee <em>Time</em>
          </Reveal>
          <Reveal as="p" className="golf-body" delay={0.25}>
            Cabo del Sol's reputation for excellence is anchored by two
            championship golf courses: the members-only Cove Club designed
            by Jack Nicklaus and the acclaimed Tom Weiskopf-designed course.
          </Reveal>
          <Reveal as="p" className="golf-body" delay={0.35}>
            Yet true value here lies in the land itself—its shifting desert
            light, ocean breezes, and the freedom to move seamlessly between
            fairways, hidden coves, and mountain trails, making nature part
            of the lifestyle rather than a backdrop.
          </Reveal>
        </div>
        <div className="golf-img-col">
          <AnimatePresence>
            {GOLF_IMAGES.map((src, i) =>
              i === golfIdx ? (
                <motion.img
                  key={src}
                  src={src}
                  alt="Championship golf course at Cabo del Sol"
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
          <div className="golf-img-dots">
            {GOLF_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`sordo-img-dot${i === golfIdx ? ' active' : ''}`}
                onClick={() => setGolfIdx(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
          <div className="golf-img-overlay" />
        </div>
      </div>
    </section>
  );
}
