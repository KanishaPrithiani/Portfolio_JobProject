import { TESTIMONIALS } from '../data/data';

export default function Testimonials() {
  return (
    <section className="section-pad" id="testimonials">
      <div className="section-head reveal" style={{ marginBottom: '44px' }}>
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testi-card" key={t.initials}>
            <div>
              <div className="testi-quote">"</div>
              <p>{t.text}</p>
            </div>
            <div className="testi-person">
              <span className="testi-avatar" style={{ background: t.bg }}>{t.initials}</span>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
