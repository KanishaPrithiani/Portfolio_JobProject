/* eslint-disable jsx-a11y/anchor-is-valid */
import { BustSVG, ArrowSVG } from './icons/icons';

export default function Intro({ heySlotRef, ghostRef, ghostInnerRef }) {
  return (
    <>
      {/* HEY / INTRO */}
      <section className="intro" id="hey">
        <div className="intro-inner">
          <h2 className="reveal">Hey!</h2>
          <div className="intro-grid">
            <div className="intro-left reveal">
              <p>I'm Kanisha, a builder based in India, currently working on personal projects.</p>
            </div>
            <div id="heySlot" ref={heySlotRef}>
              <div className="static-portrait">
                <BustSVG className="bust" />
              </div>
            </div>
            <div className="intro-right reveal">
              <p>I'm a software engineer and Figma creator with a strong focus on building modern, scalable, and conversion-driven web experiences.</p>
              <p>Over the years, I've created and shipped multiple SaaS products and Figma templates used by global customers, helping them launch faster.</p>
              <a href="#contact" className="get-started">
                Get Started
                <span className="arrow-circle"><ArrowSVG /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flip ghost */}
      <div id="flipGhost" ref={ghostRef}>
        <div className="flip-inner" ref={ghostInnerRef}>
          <div className="flip-face front"><BustSVG className="bust" /></div>
          <div className="flip-face back"><BustSVG className="bust" /></div>
        </div>
      </div>
    </>
  );
}
