import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="intro" className="intro">
      <div className="section-inner">

        {/* ── First block ── */}
        <div className="intro-grid">
          <div className="intro-left">
            <Reveal as="p" className="section-label">
              The Place
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.1}>
              The Rise of<br />A Third <em>Shore</em>
            </Reveal>
          </div>
          <Reveal className="intro-right" delay={0.1}>
            <p>
              Between Cabo San Lucas and San José del Cabo, Cabo del Sol emerges
              as its own enclave of coastline, mountains, and quiet prestige.
              Cliffs, coves, and the Sierra de la Laguna create a landscape that
              invites exploration, deep calm, and the rare gift of open horizons.
            </p>
            <p>
              The first-ever Park Hyatt Residences in Mexico offer nineteen
              private residences where architecture, nature, and world-class
              hospitality exist in perfect harmony, thoughtfully designed by
              Sordo Madaleno to redefine living on the Baja coast.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <div className="intro-rule" />

        {/* ── Second block — text left, title right ── */}
        <div className="intro-grid">
          <Reveal className="intro-right" delay={0.1}>
            <p>
              Park Hyatt Los Cabos Residences sits inside the gated sanctuary of
              Cabo del Sol, where every element is designed for rarefied living.
              This intimate collection of just 19 residences ensures a sense of
              privacy and belonging rarely found in the area.
            </p>
            <p>
              Owners can walk to a swimmable beach, enjoy privileged access to
              the Cove Club, and opt into Park Hyatt's world-class rental program.
            </p>
            <p>
              Each residence—shaped by Sordo Madaleno Arquitectos and finished by
              the award-winning SMA interior design team—is crafted as part of a
              holistic resort experience: hotel amenities, preferred guest rates,
              valet service, and a five-minute stroll to Anima Village, the new
              SOMA destination for wellness, gastronomy, and culture.
            </p>
          </Reveal>
          <div className="intro-left intro-left--right">
            <Reveal as="p" className="section-label">
              The Property
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.1}>
              Park Hyatt<br /><em>Cabo del Sol</em>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
