import { Link } from 'react-router-dom';

// Emblem: a gold sun rising behind a mountain peak — a new era for Somaliland's resources.
export function BrandEmblem({ className = 'brand__emblem' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g className="brand__sun">
        <circle cx="24" cy="25" r="8.5" />
        <path d="M24 6.5v5M11 12l3.4 3.6M37 12l-3.4 3.6M5.5 25h4.8M37.7 25h4.8" fill="none" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <path className="brand__peak" d="M3 42 17.5 22.5l5.2 6.6 6.6-9.6L45 42Z" />
      <path className="brand__vein" d="m17.5 22.5 4.3 19.5M29.3 19.5 27 42" fill="none" strokeWidth="1.4" />
    </svg>
  );
}

export default function Brand({ label = 'NEW ERA Investment, home' }) {
  return (
    <Link className="brand" to="/" aria-label={label}>
      <BrandEmblem />
      <span className="brand__text">
        <span className="brand__mark">
          NEW <span>ERA</span>
        </span>
        <span className="brand__sub">Investment</span>
      </span>
    </Link>
  );
}
