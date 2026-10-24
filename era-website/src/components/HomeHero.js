import { Link } from 'react-router-dom';
import { Arrow } from './Icons.js';
import Highlights from './Highlights.js';
import heroMineImg from '../assets/hero-mine.jpg';

export default function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__coords reveal-load d1">
            <span>Somaliland</span>
            <span>Minerals · Gold · Oil &amp; gas</span>
          </p>
          <h1 id="hero-title" className="reveal-load d2">
            Your gateway to Somaliland’s <em>minerals, gold</em> and <em>oil</em>.
          </h1>
          <p className="hero__lede reveal-load d3">
            NEW ERA Investment connects investors with proven deposits and brings exploration companies to
            Somaliland’s untapped resources, handling the introductions, licensing, partners and logistics in between.
          </p>
          <div className="hero__ctas reveal-load d4">
            <Link className="btn" to="/contact?interest=invest">
              Invest in a Proven Deposit <Arrow />
            </Link>
            <Link className="btn btn--ghost" to="/contact?interest=explore">
              Explore with Us
            </Link>
          </div>
        </div>
        <div className="hero__media reveal-load d3">
          <img
            src={heroMineImg}
            alt="Aerial view of an open-pit mine at golden hour, with excavators loading haul trucks."
            fetchpriority="high"
          />
          <p className="hero__card">
            <b>Port of Berbera</b>
            <span>Gulf of Aden access and the Berbera Corridor to Ethiopia</span>
          </p>
        </div>
      </div>
      <Highlights />
    </section>
  );
}
