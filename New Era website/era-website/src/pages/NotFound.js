import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';
import { Arrow } from '../components/Icons.js';

export default function NotFound() {
  useTitle('Page not found');
  return (
    <section className="notfound topo-bg" aria-labelledby="nf-title">
      <div className="wrap notfound__inner">
        <p className="notfound__code reveal-load d1" aria-hidden="true">404</p>
        <div>
          <p className="eyebrow reveal-load d1">Dry hole</p>
          <h1 id="nf-title" className="sec-title reveal-load d2">
            Nothing <em>found</em> at this depth.
          </h1>
          <p className="reveal-load d3">The page you are looking for has moved or never existed. Let's get you back on target.</p>
          <div className="hero__ctas reveal-load d4">
            <Link className="btn" to="/">
              Back to home <Arrow />
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
