import { useRef } from 'react';
import Reveal from './Reveal.jsx';

export default function VideoSection() {
  const videoRef = useRef(null);

  return (
    <section id="video-section" className="video-section">
      <Reveal className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls
          controlsList="nodownload"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/Video_Mkt.mp4" type="video/mp4" />
        </video>
      </Reveal>
      <div className="video-caption">
        <p>Aerial and interior cinematic tour — Park Hyatt Residences, Villas</p>
        <span>Video Tour</span>
      </div>
    </section>
  );
}
