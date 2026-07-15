import { MARQUEE_ITEMS } from '../data/data';

const marqueeAll = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {marqueeAll.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="sep"></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
