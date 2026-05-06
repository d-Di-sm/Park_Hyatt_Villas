import Reveal from './Reveal.jsx';
import { galleryImages } from '../data/content.js';

export default function Gallery({ onSelect }) {
  return (
    <section id="images" className="images-section">
      <div className="gallery-header">
        <div>
          <Reveal as="p" className="gallery-count">
            Experience
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.1} style={{ marginBottom: 0 }}>
            The <em>Spaces</em>
          </Reveal>
        </div>
        <Reveal
          as="p"
          className="section-body"
          style={{ fontSize: 12, maxWidth: 280, textAlign: 'right' }}
        >
          Images by Experience Art Technology. All images are property of SOMA Group.
        </Reveal>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 0.12}
            className="gallery-item"
            onClick={() => onSelect?.(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
