import { Link } from 'react-router-dom';

/** Light inner-page hero: text on snow-white with contour lines, optional image panel. */
export default function PageHero({ eyebrow, title, lede, image, imageAlt = '', position = '50% 50%', crumbs = [], children }) {
  return (
    <section className={`page-hero${image ? '' : ' page-hero--noimg'}`} aria-labelledby="page-title">
      <div className="wrap page-hero__grid">
        <div>
          <nav className="crumbs reveal-load d1" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
          {eyebrow && <p className="eyebrow reveal-load d1">{eyebrow}</p>}
          <h1 id="page-title" className="page-hero__title reveal-load d2">{title}</h1>
          {lede && <p className="page-hero__lede reveal-load d3">{lede}</p>}
          {children}
        </div>
        {image && (
          <div className="page-hero__img reveal-load d3">
            <img src={image} alt={imageAlt} style={{ objectPosition: position, objectFit: image.endsWith('.svg') ? 'contain' : 'cover', background: '#fff' }} />
          </div>
        )}
      </div>
    </section>
  );
}
