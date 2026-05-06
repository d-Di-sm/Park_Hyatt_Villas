import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#villas', label: 'Villas' },
  { href: '#images', label: 'Images' },
  { href: '#floor-plan', label: 'Floor Plan' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={(e) => handleClick(e, '#hero')}>
          <img src="/images/PH_Logo.png" alt="Park Hyatt" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
