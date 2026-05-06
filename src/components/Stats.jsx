import Reveal from './Reveal.jsx';
import { stats } from '../data/content.js';

export default function Stats() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.12} className="stat-item">
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
