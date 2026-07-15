/* eslint-disable jsx-a11y/anchor-is-valid */
import { PROJECTS } from '../data/data';
import { ArrowSVG } from './icons/icons';

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="section-head reveal">
        <h2>Featured<br />Projects</h2>
        <a href="#" className="view-all">View All Work <span className="arrow-circle"><ArrowSVG /></span></a>
      </div>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.name}>
            <div
              className={`card-glass card-img ${p.cls}`}
              style={{ backgroundImage: `url(${p.img})` }}
            >
              {/* Browser-chrome topbar */}
              <div className="mock-chrome">
                <div className="mock-topbar">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="mock-url-bar">
                  <span>{p.name.toLowerCase().replace(/ /g, '-')}.io</span>
                </div>
              </div>
              {/* Bottom text overlay */}
              <div className="card-caption">
                <span className="pill-tag">{p.tag}</span>
                <div className="headline">{p.headline}</div>
              </div>
              <div className="project-hover-overlay"><span>View Project ↗</span></div>
            </div>
            <div className="project-meta">
              <h4>{p.name}</h4>
              <span>{p.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
