import { Link } from 'react-router-dom';
import { tracks, oilGas } from '../data/tracks.js';
import { Arrow } from './Icons.js';
import explorationDuskImg from '../assets/exploration-dusk.jpg';

export default function TwoTracks({ alt = false }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}`} id="tracks" aria-labelledby="tracks-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow rv">Two ways we work</p>
            <h2 className="sec-title rv" data-d="1" id="tracks-title">
              Found deposits for investors. <em>Open ground</em> for explorers.
            </h2>
          </div>
          <p className="rv" data-d="2">
            NEW ERA facilitates connections between companies and opportunities in Somaliland. Every mandate follows one of two
            tracks, with oil &amp; gas alongside.
          </p>
        </div>
        <div className="tracks">
          {tracks.map((t, i) => (
            <article className="track rv" data-d={i + 1} key={t.key}>
              <div className="track__img">
                <img src={t.image} alt={t.imageAlt} loading="lazy" />
                <span className="track__n" aria-hidden="true">{t.n}</span>
              </div>
              <div className="track__body">
                <span className="track__label">{t.label}</span>
                <h3>{t.title}</h3>
                <p className="track__lead">{t.lead}</p>
                <ul className="checks">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link className="btn" to={`/contact?interest=${t.key}`}>
                  {t.cta} <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <article className="oilgas rv">
          <div className="oilgas__img">
            <img src={explorationDuskImg} alt="Exploration rig silhouetted against hills at dusk." loading="lazy" />
          </div>
          <div className="oilgas__body">
            <span className="track__label">For upstream companies</span>
            <h3>{oilGas.title}</h3>
            <p>{oilGas.text}</p>
          </div>
          <Link className="btn btn--ghost" to="/contact?interest=oil">
            Discuss oil &amp; gas <Arrow />
          </Link>
        </article>
      </div>
    </section>
  );
}
