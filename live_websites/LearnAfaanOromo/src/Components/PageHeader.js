import React from 'react';

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <header className="page-header">
    <div className="container">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </header>
);

export default PageHeader;
