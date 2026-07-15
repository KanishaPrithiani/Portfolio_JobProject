import starImg from '../assets/image-2.png';
import boltImg  from '../assets/image-1.png';
import { BustSVG } from './icons/icons';

export default function Hero({ heroSlotRef }) {
  return (
    <header className="hero" id="hero">
      <div className="hero-layout">

        {/* Left image */}
        <div className="hero-side left">
          <img src={starImg} alt="Star icon" className="hero-side-img" />
        </div>

        {/* Center */}
        <div className="hero-center">
          <div className="hero-label">Based in India &nbsp;·&nbsp; Available</div>
          <h1 className="hero-title">
            <span className="line"><span>Software</span></span>
            <span className="line"><span>Engineer</span></span>
          </h1>
          <div className="hero-portrait-wrap">
            <div id="heroSlot" ref={heroSlotRef}>
              <div className="static-portrait">
                <BustSVG className="bust" />
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-side right">
          <img src={boltImg} alt="Bolt icon" className="hero-side-img" />
        </div>

      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>

      {/* Meta row */}
      <div className="hero-meta">
        <span className="copyright">©2026</span>
        <div className="avail">
          <span className="avail-dot"></span>
          <span>Open to projects</span>
        </div>
        <span className="since">/ Creating since 2020</span>
      </div>
    </header>
  );
}
