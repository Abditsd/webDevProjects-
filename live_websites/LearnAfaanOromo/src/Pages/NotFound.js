import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <section className="section not-found">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Error 404</span>
          <h1>Page not found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
