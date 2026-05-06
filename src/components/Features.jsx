import Reveal from './Reveal.jsx';

const ALL_FEATURES = [
  'Open concept living, dining, kitchen & bar',
  'Seamless indoor-outdoor living',
  'Private swimming pool and garden',
  'Jacuzzi',
  'Two floors',
  '3 indoor parking spaces, 2 outdoor',
  "Owner's Closet",
  'Fully furnished and equipped',
  'Custom designed furniture',
  'Automated curtains in living and dining room',
  'WOLF and Sub-Zero kitchen appliances',
  'Kohler bathroom accessories',
  'Integrated Kleverness technology for independent room temperature control and lighting',
  'Door hardware with mobile key and online door locking',
  'Saint Gobain, hurricane protection category 4 floor-to-ceiling windows, with sliding doors',
  'Indoor flooring in ocean white travertine marble',
  'Marble countertops in kitchens',
  '2.70 m / 8.85 ft ceiling heights in the unit, 3.15 m / 10.3 ft in master bedroom',
  "Sordo Madaleno's signature craftsmanship",
];

const COL1 = ALL_FEATURES.filter((f) => f !== 'WOLF and Sub-Zero kitchen appliances').slice(0, 10).concat(['WOLF and Sub-Zero kitchen appliances']);
const COL2 = ALL_FEATURES.filter((f) => f !== 'WOLF and Sub-Zero kitchen appliances').slice(10);

export default function Features() {
  return (
    <>
      <div className="villas-separator">
        <div className="vs-overlay" />
        <Reveal className="vs-content" delay={0.1}>
          <p className="vs-eyebrow">Cabo del Sol · Los Cabos</p>
          <h3 className="vs-quote">
            Where the desert<br />dances with <em>the sea</em>
          </h3>
          <div className="vs-rule" />
        </Reveal>
      </div>

      <section id="features" className="features-section">
      <div className="section-inner">
        <Reveal as="p" className="section-label" delay={0.1}>
          Villa Features
        </Reveal>
        <div className="fp-features-grid">
          <Reveal as="ul" className="fp-features-list" delay={0.15}>
            {COL1.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </Reveal>
          <Reveal as="ul" className="fp-features-list" delay={0.28}>
            {COL2.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
