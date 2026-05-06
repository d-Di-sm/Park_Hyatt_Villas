import Reveal from './Reveal.jsx';

export default function WhereWeStand() {
  return (
    <section id="where-we-stand" className="where-we-stand">
      <div className="section-inner">
        <div className="wws-grid">
          <div className="wws-left">
            <Reveal as="p" className="section-label">
              The Enclave
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.1}>
              Where <em>We Stand</em>
            </Reveal>

            <Reveal as="p" className="wws-body-p" delay={0.2}>
              In a rare and secluded setting, the villas were conceived to feel
              intimate by design.
            </Reveal>

            <Reveal as="p" className="wws-body-p" delay={0.28}>
              Cradled by unspoiled nature and neighboring world-class
              destinations, the remaining villas invite a life of uncommon
              tranquility and effortless access—just steps away from one of the
              region's largest and most celebrated spas.
            </Reveal>

            <Reveal delay={0.36}>
              <div className="wws-callout">
                <span>A number of villas remain available, private viewings upon request.</span>
              </div>
            </Reveal>

          </div>

          <Reveal className="wws-right" delay={0.15}>
            <div className="wws-map-frame">
              <img
                src="/images/MapaLocation.jpg"
                alt="Cabo del Sol master plan"
                loading="lazy"
              />
              <div className="wws-map-overlay" />
              <div className="wws-map-label">
                <p>
                  Cabo del Sol &nbsp;·&nbsp;{' '}
                  <span>Los Cabos, México</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
