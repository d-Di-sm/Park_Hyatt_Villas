import Reveal from './Reveal.jsx';
import CanvasExperience from './CanvasExperience.jsx';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-inner" style={{ marginBottom: 40 }}>
        <Reveal as="p" className="section-label">
          Immersive
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.1}>
          A Living <em>Atmosphere</em>
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.2}>
          Every detail of Villa Serena was conceived as an experience — light, material,
          and movement composed in concert. Drag, observe, and let the residence reveal
          itself.
        </Reveal>
      </div>

      <Reveal className="experience-canvas-wrapper" delay={0.15}>
        <CanvasExperience />
        <div className="experience-overlay">
          <p>
            Real-time render <span>·</span> WebGL
          </p>
          <p>
            <span>Drag</span> to explore
          </p>
        </div>
      </Reveal>
    </section>
  );
}
