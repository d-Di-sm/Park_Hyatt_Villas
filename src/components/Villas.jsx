import Reveal from './Reveal.jsx';

export default function Villas() {

  return (
    <>
      {/* ── Split intro ───────────────────────────── */}
      <section id="villas" className="villas">
        <div className="villas-split">
          <div className="villas-img-col">
            <img
              src="/images/ESC_01.png"
              alt="Villa architecture"
              loading="lazy"
            />
            <p className="villas-disclaimer">
              The designs, materials and amenities depicted herein are artist's
              conceptual renderings based upon current development plans subject
              to change at any time and without notice. Unit dimensions are
              approximate and based on current plans.
            </p>
          </div>

          <div className="villas-content-col">
            <Reveal as="p" className="section-label">
              Discover
            </Reveal>
            <Reveal as="h2" className="section-title villas-title" delay={0.1}>
              The <em>Villas</em>
            </Reveal>
            <Reveal as="p" className="villas-body" delay={0.22}>
              Every detail reflects a dialogue between land, sea, and sky: a
              carefully chosen palette of native vegetation, warm-toned concrete
              textured like the surrounding cliffs, and natural woods and stone
              that invite the outdoors in.
            </Reveal>
            <Reveal as="p" className="villas-body" delay={0.34}>
              Open-air spaces flow seamlessly from one to the next, allowing
              light, breeze, and landscape to shape the experience while
              maintaining the comfort expected of a world-class residence.
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
