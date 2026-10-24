import { Link } from 'react-router-dom';
import { sectors, statusLabel } from '../data/sectors.js';

function Tile({ s, i }) {
  const cls = ['el', `el--${s.key}`, s.feature && 'el--au', s.wide && 'el--wide', 'rv'].filter(Boolean).join(' ');
  return (
    <article className={cls} data-d={(i % 3) + 1}>
      <div className="el__top">
        <span className="el__z">{s.z}</span>
        <span>{s.weight}</span>
      </div>
      <div className="el__sym" aria-hidden="true">{s.symbol}</div>
      <h3 className="el__name">{s.name}</h3>
      <span className={`status status--${s.status}`}>{statusLabel[s.status]}</span>
      <p>{s.text}</p>
      <div className="el__meta">
        {s.meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </article>
  );
}

export default function SectorsTable({ alt = false, compact = false }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}`} id="sectors" aria-labelledby="sectors-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow rv">Sectors &amp; commodities</p>
            <h2 className="sec-title rv" data-d="1" id="sectors-title">
              What lies <em>beneath</em> Somaliland.
            </h2>
          </div>
          <p className="rv" data-d="2">
            Commodities widely reported in Somaliland, tagged by where opportunities typically stand: known occurrences
            suited to investors, or exploration-stage ground.
            {compact && (
              <>
                {' '}
                <Link to="/sectors">See all sectors</Link>.
              </>
            )}
          </p>
        </div>
        <div className="table">
          {sectors.map((s, i) => (
            <Tile s={s} i={i} key={s.key} />
          ))}
        </div>
        <p className="sectors__foot">
          Status tags are general and indicative. Gm, Gy and O&amp;G are NEW ERA sector codes.
        </p>
      </div>
    </section>
  );
}
