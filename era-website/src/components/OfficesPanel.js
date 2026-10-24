import { contact } from '../data/company.js';

function Pin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/** Two-office panel used as the About section's visual column. */
export default function OfficesPanel() {
  return (
    <aside className="offices" aria-label="Our offices">
      <h3 className="offices__title">Two offices, one team</h3>
      <p className="offices__intro">On the ground in Somaliland, with a UK base for international investors.</p>
      <div className="office">
        <span className="office__pin"><Pin /></span>
        <span className="office__label">Somaliland</span>
        <h3>{contact.address[0]}</h3>
        <address>{contact.address.join(', ')}</address>
      </div>
      <div className="office">
        <span className="office__pin"><Pin /></span>
        <span className="office__label">UK office</span>
        <h3>Sheffield</h3>
        <address>{contact.ukAddress.join(', ')}</address>
      </div>
      <ul className="offices__list">
        <li>Liaison with the Ministry of Energy &amp; Minerals</li>
        <li>Local partners, communities and regional authorities</li>
        <li>Investor meetings in the UK and in Somaliland</li>
      </ul>
    </aside>
  );
}
