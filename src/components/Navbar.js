/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Navbar({ onContactClick }) {
  return (
    <nav className="pill-nav">
      <span className="brand">Kanisha</span>
      <div className="nav-links">
        <a href="#hey">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Work</a>
        <a href="#thoughts">Blog</a>
      </div>
      <button className="cta-btn" onClick={onContactClick}>Let's Talk</button>
    </nav>
  );
}
