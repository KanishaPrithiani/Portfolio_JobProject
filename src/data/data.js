import projNova   from '../assets/proj-nova.png';
import projAether from '../assets/proj-aether.png';
import projBloom  from '../assets/proj-bloom.png';
import projPulse  from '../assets/proj-pulse.png';
import thoughtCity   from '../assets/thought-city.png';
import thoughtSubway from '../assets/thought-subway.png';

export const MARQUEE_ITEMS = [
  'From idea to launch', 'Clean, scalable products', 'Framer Templates',
  'Frontend Engineering', 'SaaS Platforms', 'Conversion-driven Design',
  'Web Performance', 'Product Strategy', 'UI / UX Excellence', 'Based in India',
];

export const SERVICES = [
  { num: '01', title: 'Website Migration',    tags: 'Web Migration\u00a0·\u00a0Optimization\u00a0·\u00a0Framer Rebuild' },
  { num: '02', title: 'Figma Templates',      tags: 'Startup\u00a0·\u00a0Agency\u00a0·\u00a0SaaS' },
  { num: '03', title: 'Frontend Development', tags: 'UI Dev\u00a0·\u00a0Responsive\u00a0·\u00a0Performance' },
  { num: '04', title: 'Product Consulting',   tags: 'Strategy\u00a0·\u00a0Direction\u00a0·\u00a0Technical Guidance' },
];

export const PROJECTS = [
  { cls: 'card-nova',   img: projNova,   headline: 'Bringing your vision to life.',             tag: 'Agency',    name: 'Nova Studio', sub: 'Agency Framer Template' },
  { cls: 'card-aether', img: projAether, headline: 'Your AI-Powered Design Assistant',           tag: 'AI · SaaS', name: 'Aether AI',   sub: 'SaaS AI Dashboard' },
  { cls: 'card-bloom',  img: projBloom,  headline: <>Design Smarter.<br />Build Faster.</>,      tag: 'Product',   name: 'Bloom UI',    sub: 'AI Design Platform' },
  { cls: 'card-pulse',  img: projPulse,  headline: <>Write it once.<br />Publish everywhere.</>, tag: 'Social',    name: 'Pulse Post',  sub: 'Social Media Scheduler' },
];

export const TESTIMONIALS = [
  { initials: 'SC', bg: '#c77dff', name: 'Sofia Chen',       role: 'Head of Growth · Luma',
    text: '"Templyo completely changed how I approach building sites in Framer. The templates aren\'t just beautiful — they\'re structured in a way that makes scaling so much easier."' },
  { initials: 'JR', bg: '#48cae4', name: 'James Rutherford', role: 'Product Designer · Arc',
    text: '"I\'ve tried dozens of Framer templates, but Templyo stands out. Everything feels intentional, from the layout to the smallest interactions."' },
  { initials: 'NP', bg: '#f4a261', name: 'Nina Patel',        role: 'Co-founder · Stackr',
    text: '"Templyo saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom."' },
  { initials: 'LM', bg: '#52b788', name: 'Luca Moretti',      role: 'Frontend Engineer · Vercel',
    text: '"The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish."' },
];

export const THOUGHTS = [
  { img: thoughtCity,   date: 'May 5, 2025',  title: 'Building Trust Through Clear Design',    desc: 'How thoughtful visual choices create a stronger sense of reliability for modern brands.' },
  { img: thoughtSubway, date: 'Jun 16, 2025', title: 'The Role of Art Direction in Branding',  desc: 'Why visual direction helps brands create emotion and a distinct point of view.' },
];

export const TAGLINE_TEXT = 'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use. Driven by clean, structured systems and intentional design.';
