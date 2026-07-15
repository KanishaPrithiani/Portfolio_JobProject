import { TAGLINE_TEXT } from '../data/data';

const taglineWords = TAGLINE_TEXT.split(' ');

export default function Tagline({ taglineSecRef, taglineRef }) {
  return (
    <section className="tagline" ref={taglineSecRef}>
      <p ref={taglineRef}>
        {taglineWords.map((w, i) => (
          <span key={i}>{w}{i < taglineWords.length - 1 ? ' ' : ''}</span>
        ))}
      </p>
    </section>
  );
}
