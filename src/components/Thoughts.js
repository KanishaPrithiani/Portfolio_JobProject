/* eslint-disable jsx-a11y/anchor-is-valid */
import { THOUGHTS } from '../data/data';
import { ArrowSVG } from './icons/icons';

export default function Thoughts() {
  return (
    <section className="section-pad" id="thoughts">
      <div className="section-head reveal" style={{ marginBottom: '44px' }}>
        <h2>Thoughts</h2>
      </div>
      <div className="thoughts-grid">

        {/* Photo cards */}
        {THOUGHTS.map((t) => (
          <div
            key={t.title}
            className="thought-card thought-photo reveal"
            style={{ backgroundImage: `url(${t.img})` }}
          >
            <div className="thought-content">
              <span className="date">{t.date}</span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <div className="thought-card thought-cta reveal">
          <p className="big">See how we shape brands with clarity and craft— explore our blog</p>
          <a href="#" className="thought-cta-link">
            <span>View All Work</span>
            <span className="cta-arrow"><ArrowSVG /></span>
          </a>
        </div>

      </div>
    </section>
  );
}
