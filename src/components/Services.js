import { SERVICES } from '../data/data';
import { ArrowSVG } from './icons/icons';

export default function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="services-inner">
        <h2 className="reveal" style={{ fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 900, letterSpacing: '-0.025em', marginBottom: '56px' }}>
          Services
        </h2>
        {SERVICES.map((svc) => (
          <div className="service-row reveal" key={svc.num}>
            <div className="svc-left">
              <span className="svc-num">{svc.num}</span>
              <h3>{svc.title}</h3>
            </div>
            <div className="svc-right">
              <span className="tags">{svc.tags}</span>
              <span className="svc-arrow"><ArrowSVG /></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
