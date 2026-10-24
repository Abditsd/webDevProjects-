import { Link, useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import { GridPost } from '../components/InsightCards.js';
import PartnerBand from '../components/PartnerBand.js';
import { Arrow } from '../components/Icons.js';
import { findInsight, formatDate, insights } from '../data/insights.js';
import NotFound from './NotFound.js';

export default function InsightDetail() {
  const { slug } = useParams();
  const post = findInsight(slug);
  useTitle(post ? post.title : 'Article not found');
  if (!post) return <NotFound />;

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        image={post.image}
        crumbs={[{ label: 'Insights', to: '/insights' }, { label: post.category }]}
      >
        <p className="article-meta reveal-load d3">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
          <span>NEW ERA Investment</span>
        </p>
      </PageHero>
      <article className="sec article">
        <div className="wrap article__grid">
          <aside className="article__aside rv">
            <p className="article__label">In brief</p>
            <p className="article__brief">{post.excerpt}</p>
            <Link className="link-arrow" to="/insights">
              All insights <Arrow />
            </Link>
          </aside>
          <div className="article__body">
            {post.body.map((para, i) => (
              <p className={`rv${i === 0 ? ' article__first' : ''}`} key={i}>
                {para}
              </p>
            ))}
            <blockquote className="article__pull rv">
              Good geology gets a project noticed. Local relationships get it moving.
            </blockquote>
            <p className="placeholder-note rv">Placeholder article content for design purposes.</p>
          </div>
        </div>
      </article>
      <section className="sec related" aria-labelledby="related-title">
        <div className="wrap">
          <h2 className="related__title rv" id="related-title">More insights</h2>
          <div className="posts-grid">
            {related.map((p, i) => (
              <GridPost post={p} delay={i + 1} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
      <PartnerBand />
    </>
  );
}
