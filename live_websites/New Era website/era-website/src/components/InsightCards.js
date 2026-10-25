import { Link } from 'react-router-dom';
import { formatDate } from '../data/insights.js';

export function FeaturePost({ post }) {
  return (
    <Link className="post post--feature rv" to={`/insights/${post.slug}`}>
      <div className={`post__img${post.image.endsWith('.svg') ? ' post__img--map' : ''}`}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
      </div>
      <div className="post__meta">
        <span>{post.category}</span>
        <span>{post.readTime}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </Link>
  );
}

export function RowPost({ post, delay }) {
  return (
    <Link className="post post--row rv" data-d={delay} to={`/insights/${post.slug}`}>
      <div className={`post__img${post.image.endsWith('.svg') ? ' post__img--map' : ''}`}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
      </div>
      <div>
        <div className="post__meta">
          <span>{post.category}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
}

export function GridPost({ post, delay }) {
  return (
    <Link className="post post--grid rv" data-d={delay} to={`/insights/${post.slug}`}>
      <div className={`post__img${post.image.endsWith('.svg') ? ' post__img--map' : ''}`}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
      </div>
      <div className="post__meta">
        <span>{post.category}</span>
        <span>{formatDate(post.date)}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </Link>
  );
}

/** Feature article plus two side articles. */
export default function InsightCards({ posts }) {
  const [first, ...rest] = posts;
  return (
    <div className="posts">
      <FeaturePost post={first} />
      <div className="posts__side">
        {rest.slice(0, 2).map((p, i) => (
          <RowPost post={p} delay={i + 1} key={p.slug} />
        ))}
      </div>
    </div>
  );
}

/** Text-only list (used on Home to avoid repeating images already on the page). */
export function InsightList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((p, i) => (
        <Link className="post post--text rv" data-d={i + 1} to={`/insights/${p.slug}`} key={p.slug}>
          <div className="post__meta">
            <span>{p.category}</span>
            <span>{formatDate(p.date)}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
          <span className="post__more">Read article</span>
        </Link>
      ))}
    </div>
  );
}
