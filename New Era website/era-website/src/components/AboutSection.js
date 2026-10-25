import { Link } from 'react-router-dom';
import { values } from '../data/company.js';
import { Arrow } from './Icons.js';
import LeaderCard from './LeaderCard.js';
import OfficesPanel from './OfficesPanel.js';

export default function AboutSection({ condensed = false, alt = false }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}`} id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <div className="about__media rv">
          <OfficesPanel />
        </div>
        <div>
          <p className="eyebrow rv">About NEW ERA</p>
          <h2 className="sec-title rv" data-d="1" id="about-title">
            A Somaliland team that <em>knows</em> the ground.
          </h2>
          <p className="about__lead rv" data-d="2">
            NEW ERA Investment is a <strong>minerals, gold and oil &amp; gas</strong> investment consultancy
            focused on Somaliland. We facilitate connections between international companies, investors and the
            opportunities on the ground.
          </p>
          {condensed ? (
            <div className="rv" data-d="3">
              <p className="about__copy">
                Local knowledge, working relationships with government and communities, and a practical understanding of
                what it takes to move a project forward.
              </p>
              <Link className="link-arrow" to="/about">
                More about NEW ERA <Arrow />
              </Link>
            </div>
          ) : (
            <>
              <div className="about__copy rv" data-d="3">
                <p>
                  Our team is based in Somaliland and works daily with the Ministry of Energy &amp; Minerals, regional
                  authorities, landowners and local businesses. That network lets investors and exploration companies move
                  from first enquiry to licence and site work with fewer surprises.
                </p>
              </div>
              <p className="mission rv" data-d="3">
                <b>Our mission</b>To bring responsible investment and exploration to Somaliland’s natural resources, for
                the benefit of investors, the country and the communities around every project.
              </p>
              <ul className="values">
                {values.map((v, i) => (
                  <li className="rv" data-d={i + 1} key={v.title}>
                    <span className="n">{v.n}</span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <LeaderCard />
        </div>
      </div>
    </section>
  );
}
