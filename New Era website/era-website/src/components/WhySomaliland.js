import { whySomaliland } from '../data/company.js';
import somalilandMapSvg from '../assets/somaliland-map.svg';

export default function WhySomaliland({ alt = true }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}`} id="why-somaliland" aria-labelledby="why-title">
      <div className="wrap why__grid">
        <figure className="map-fig rv">
          <img
            src={somalilandMapSvg}
            alt="Stylised map of Somaliland showing Hargeisa, Berbera, the Berbera Corridor to Ethiopia, indicative areas of reported mineral occurrences and an area of oil and gas interest."
            loading="lazy"
            width="860"
            height="560"
          />
          <figcaption>Stylised, indicative map for illustration only. Locations of occurrences are approximate.</figcaption>
        </figure>
        <div>
          <p className="eyebrow rv">Why Somaliland</p>
          <h2 className="sec-title rv" data-d="1" id="why-title">
            Under-explored ground on a <em>strategic</em> coast.
          </h2>
          <ul className="why-list">
            {whySomaliland.map((w, i) => (
              <li className="rv" data-d={(i % 3) + 1} key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
