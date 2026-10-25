import React from 'react';

// Dark call-to-action block used at the bottom of pages; buttons are passed as children
const CtaBanner = ({ title, text, children }) => (
  <section className="cta-wrap">
    <div className="container">
      <div className="cta-banner reveal">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <div className="cta-buttons">{children}</div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
