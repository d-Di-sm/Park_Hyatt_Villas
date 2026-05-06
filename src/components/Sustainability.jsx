import Reveal from './Reveal.jsx';

const PILLARS = [
  { label: 'Energy',    desc: 'Efficient systems' },
  { label: 'Materials', desc: 'Locally sourced'   },
  { label: 'Design',    desc: 'Low impact'         },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="sustainability">
      <div className="sust-split">

        {/* ── Image ── */}
        <div className="sust-img-col">
          <img
            src="/images/PATIO.png"
            alt="Natural architecture and vegetation"
            loading="lazy"
          />
          <div className="sust-img-overlay" />
        </div>

        {/* ── Content ── */}
        <div className="sust-content-col">
          <Reveal as="p" className="section-label" delay={0.05}>
            Sustainability
          </Reveal>

          <Reveal as="h2" className="section-title sust-title" delay={0.15}>
            Remain <em>Conscious</em>
          </Reveal>

          <Reveal as="p" className="sust-body" delay={0.25}>
            Guided by sustainability and respect for place, the design
            integrates energy-efficient systems, locally sourced materials,
            and an approach that reduces environmental impact.
          </Reveal>

          <Reveal as="p" className="sust-body" delay={0.35}>
            The result is more than a collection of villas—it is a new way
            of living in Los Cabos, one that elevates luxury by grounding
            it in authenticity, nature, and architectural innovation.
          </Reveal>

          <Reveal className="sust-pillars" delay={0.48}>
            {PILLARS.map((p) => (
              <div className="sust-pillar" key={p.label}>
                <span className="sust-pillar-label">{p.label}</span>
                <span className="sust-pillar-desc">{p.desc}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
