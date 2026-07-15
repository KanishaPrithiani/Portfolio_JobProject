import { useScrollEffects } from './hooks/useScrollEffects';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Intro        from './components/Intro';
import Marquee      from './components/Marquee';
import Tagline      from './components/Tagline';
import Services     from './components/Services';
import Projects     from './components/Projects';
import Testimonials from './components/Testimonials';
import Thoughts     from './components/Thoughts';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const {
    cursorRef, ringRef,
    heroSlotRef, heySlotRef,
    ghostRef, ghostInnerRef,
    taglineRef, taglineSecRef,
    scrollToContact,
  } = useScrollEffects();

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor"      ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      <Navbar onContactClick={scrollToContact} />

      {/* Morph wrapper keeps Hero + Intro in the same stacking context for the flip ghost */}
      <div className="morph-wrapper" id="morphWrapper">
        <Hero  heroSlotRef={heroSlotRef} />
        <Intro heySlotRef={heySlotRef} ghostRef={ghostRef} ghostInnerRef={ghostInnerRef} />
      </div>

      <Marquee />
      <Tagline taglineSecRef={taglineSecRef} taglineRef={taglineRef} />
      <Services />
      <Projects />
      <Testimonials />
      <Thoughts />
      <Contact />
      <Footer />
    </>
  );
}
