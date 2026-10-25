import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import { FeaturePost, GridPost } from '../components/InsightCards.js';
import PartnerBand from '../components/PartnerBand.js';
import { insights } from '../data/insights.js';

export default function Insights() {
  useTitle('Insights');
  const [lead, ...rest] = insights;
  const two = rest.slice(0, 2);
  const three = rest.slice(2);
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Notes on <em>Somaliland’s</em> resources.</>}
        lede="Perspectives on gold, minerals, licensing, logistics and oil & gas in Somaliland."
        crumbs={[{ label: 'Insights' }]}
      />
      <section className="sec" aria-label="Articles">
        <div className="wrap">
          <div className="insights-lead">
            <FeaturePost post={lead} />
          </div>
          <div className="posts-grid posts-grid--two">
            {two.map((p, i) => (
              <GridPost post={p} delay={i + 1} key={p.slug} />
            ))}
          </div>
          <div className="posts-grid">
            {three.map((p, i) => (
              <GridPost post={p} delay={i + 1} key={p.slug} />
            ))}
          </div>
          <p className="placeholder-note">Sample articles shown with placeholder content.</p>
        </div>
      </section>
      <PartnerBand />
    </>
  );
}
