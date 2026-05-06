import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
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
      className="lightbox"
      onClick={handleBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button className="lightbox-close" onClick={onClose}>
        ✕ &nbsp;Close
      </button>
      <img src={src.src} alt={src.alt} />
    </motion.div>
  );
}
