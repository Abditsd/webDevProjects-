import { Link } from 'react-router-dom';
import { services, trackLabel } from '../data/services.js';
import { Arrow, ServiceIcon } from './Icons.js';

export default function ServicesSection({ condensed = false, alt = false }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}${condensed ? ' services--condensed' : ''}`} id="services" aria-labelledby="services-title">
      <div className="wrap services__grid">
        <div className="services__aside">
          <p className="eyebrow rv">Facilitation services</p>
          <h2 className="sec-title rv" data-d="1" id="services-title">
            Everything between <em>interest</em> and investment.
          </h2>
          <p className="rv" data-d="2">
            Engage NEW ERA for a single service or the full journey. Each service supports investors in proven deposits,
            exploration companies, or both.
          </p>
          {condensed && (
            <Link className="btn btn--ghost rv" data-d="3" to="/services">
              All services <Arrow />
            </Link>
          )}
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc rv" key={s.slug} id={s.slug}>
              <span className="svc__n" aria-hidden="true" />
              <h3>
                {condensed ? (
                  <Link className="svc__link" to={`/services#${s.slug}`}>{s.title}<span className="svc__go" aria-hidden="true">→</span></Link>
                ) : (
                  s.title
                )}
              </h3>
              <span className="svc__icon" aria-hidden="true">
                <ServiceIcon name={s.icon} />
              </span>
              <span className={`svc__track svc__track--${s.track}`}>{trackLabel[s.track]}</span>
              {!condensed && (
                <>
                  <p>{s.summary}</p>
                  <ul className="svc__tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
