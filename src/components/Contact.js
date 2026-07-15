/* eslint-disable jsx-a11y/anchor-is-valid */
import { XIcon, InstagramIcon, BehanceIcon, LinkedInIcon } from './icons/icons';

export default function Contact() {
  return (
    <section className="section-pad" id="contact">
      <div className="contact-grid">
        <div className="contact-left reveal">
          <div className="contact-left-top">
            <h2>Let's talk.</h2>
            <p>Have a project or need help? Fill out the form, and I'll get back to you within 24 hours.</p>
          </div>
          <div className="socials">
            <a href="#" aria-label="X"><XIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Behance"><BehanceIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()} id="contactForm">
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" id="fieldName" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" id="fieldEmail" />
          </div>
          <div className="field">
            <label>Your Project</label>
            <textarea rows="3" placeholder="Tell me about your project" id="fieldProject"></textarea>
          </div>
          <button className="submit-btn" type="submit">Send Message →</button>
        </form>
      </div>
    </section>
  );
}
