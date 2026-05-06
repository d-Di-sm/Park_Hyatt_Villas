import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight && bgRef.current) {
        bgRef.current.style.transform = `scale(1) translateY(${y * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      <div ref={bgRef} className={`hero-bg ${loaded ? 'loaded' : ''}`} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src="/images/PH_Residences_Logo.png" alt="Park Hyatt Residences" className="hero-logo" />
        </motion.div>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          Los Cabos <span>◆</span> Baja California Sur
        </motion.p>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
