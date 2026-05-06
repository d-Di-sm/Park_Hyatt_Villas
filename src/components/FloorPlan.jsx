import { useState, useEffect, useCallback } from 'react';
import Reveal from './Reveal.jsx';
import FloorPlanLightbox from './FloorPlanLightbox.jsx';
import { floorData } from '../data/content.js';

const slides = [
  { src: '/images/Patio3.png',     label: 'Patio'        },
  { src: '/images/Bath01.png',     label: 'Master Bath'  },
  { src: '/images/Bedroom01.png',  label: 'Master Suite' },
  { src: '/images/Kitchen02.png',  label: 'Kitchen'      },
  { src: '/images/Molcajete.png',  label: 'Dining Room'  },
  { src: '/images/BATH 03.png',    label: 'Bath'         },
  { src: '/images/Hall01.png',     label: 'Hall'         },
  { src: '/images/Hall02.png',     label: 'Hall'         },
];


const FLOORS = [
  {
    id: 1,
    label: 'Type 01',
    images: [
      { src: '/plans/Type01/Planta Baja_Villa 1.png', sub: 'Planta Baja' },
      { src: '/plans/Type01/Sotano_Villa 1.png',      sub: 'Sótano'      },
    ],
    hqImages: [
      { src: '/plans/Type01/Planta Baja_Villa 1_HQ.png', sub: 'Planta Baja' },
      { src: '/plans/Type01/Sotano_Villa 1_HQ.png',      sub: 'Sótano'      },
    ],
  },
  {
    id: 2,
    label: 'Type 02',
    images: [
      { src: '/plans/Type02/Planta Baja_Villa5.png', sub: 'Planta Baja' },
      { src: '/plans/Type02/Sotano_Villa5.png',      sub: 'Sótano'      },
    ],
    hqImages: [
      { src: '/plans/Type02/Planta Baja_Villa5_HQ.png', sub: 'Planta Baja' },
      { src: '/plans/Type02/Sotano_Villa5_HQ.png',      sub: 'Sótano'      },
    ],
  },
  {
    id: 3,
    label: 'Type 03',
    images: [
      { src: '/plans/Type03/Planta Baja_villa9.png', sub: 'Planta Baja' },
      { src: '/plans/Type03/Sotano_villa9.png',      sub: 'Sótano'      },
    ],
    hqImages: [
      { src: '/plans/Type03/Planta Baja_villa9_HQ.png', sub: 'Planta Baja' },
      { src: '/plans/Type03/Sotano_villa9_HQ.png',      sub: 'Sótano'      },
    ],
  },
];

export default function FloorPlan() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  useEffect(() => { const t = setInterval(next, 4500); return () => clearInterval(t); }, [next]);

  const [active, setActive]       = useState(1);
  const [subIdx, setSubIdx]       = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentFloor = FLOORS.find((f) => f.id === active);

  function handleType(id) {
    setActive(id);
    setSubIdx(0);
  }

  return (
    <>
      {/* ── Carousel ── */}
      <div className="villas-carousel">
        <div className="vc-track-wrapper">
          <div
            className="vc-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s) => (
              <div className="vc-slide" key={s.src}>
                <img src={s.src} alt={s.label} loading="lazy" />
                <span className="vc-label">{s.label}</span>
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
          {slides.map((_, i) => (
            <button
              key={i}
              className={`vc-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="vc-counter">
          <span className="vc-counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="vc-counter-sep" />
          <span className="vc-counter-total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      <section id="floor-plan" className="floor-plan">
        <div className="section-inner">
          <div className="floor-grid">
            <div>
              <Reveal as="p" className="section-label">
                Architecture
              </Reveal>
              <Reveal as="h2" className="section-title" delay={0.1}>
                Floor <em>Plans</em>
              </Reveal>
              <Reveal as="p" className="section-body" delay={0.22}>
                Each element brings together land, sea, and sky through natural
                materials and a warm, contextual palette; open-air spaces flow
                effortlessly, allowing light, breeze, and landscape to shape the
                experience while preserving the comfort and sophistication of a
                world-class residence.
              </Reveal>
              <Reveal className="floor-plan-tabs" delay={0.22}>
                {FLOORS.map((f) => (
                  <button
                    key={f.id}
                    className={`tab-btn ${active === f.id ? 'active' : ''}`}
                    onClick={() => handleType(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </Reveal>
              <Reveal className="room-specs" delay={0.38}>
                <div className="room-row room-header">
                  <span className="room-name">Space</span>
                  <span className="room-size">sq ft</span>
                  <span className="room-sqm">sqm</span>
                </div>
                {floorData[active].map((r) => (
                  <div
                    className={`room-row${r.type ? ` room-row--${r.type}` : ''}`}
                    key={r.name}
                  >
                    <span className="room-name">{r.name}</span>
                    <span className="room-size">{r.size}</span>
                    <span className="room-sqm">{r.sqm}</span>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal className="floor-plan-visual fp-image-visual" delay={0.1}>
              <div className="fp-sub-tabs">
                {currentFloor.images.map((img, i) => (
                  <button
                    key={i}
                    className={`fp-sub-btn${subIdx === i ? ' active' : ''}`}
                    onClick={() => setSubIdx(i)}
                  >
                    {img.sub}
                  </button>
                ))}
              </div>
              <div
                className="fp-img-wrap fp-img-clickable"
                onClick={() => setLightboxOpen(true)}
                title="Ver en pantalla completa"
              >
                <img
                  key={currentFloor.images[subIdx].src}
                  className="fp-plan-img"
                  src={currentFloor.images[subIdx].src}
                  alt={`${currentFloor.label} – ${currentFloor.images[subIdx].sub}`}
                  loading="lazy"
                />
                <div className="fp-zoom-hint">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 2h4v4M10 6l4-4M6 14H2v-4M6 10l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span>Ver HQ</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <FloorPlanLightbox
          images={currentFloor.hqImages}
          initialIndex={subIdx}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
