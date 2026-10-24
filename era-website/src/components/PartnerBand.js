import { Link } from 'react-router-dom';
import { contact } from '../data/company.js';
import { Arrow } from './Icons.js';

export default function PartnerBand() {
  return (
    <section className="partner" aria-labelledby="partner-title">
      <div className="wrap">
        <p className="eyebrow rv">Partner with us</p>
        <h2 className="partner__title rv" data-d="1" id="partner-title">
          Ready to invest or explore in <em>Somaliland</em>?
        </h2>
        <div className="partner__grid">
          <div className="partner__card rv" data-d="1">
            <span>Track 01 · Investors</span>
            <h3>Invest in a proven deposit</h3>
            <p>Tell us your commodity, budget and timeline. We will match you with suitable opportunities and partners.</p>
            <Link className="btn btn--light" to="/contact?interest=invest">
              Start as an investor <Arrow />
            </Link>
          </div>
          <div className="partner__card rv" data-d="2">
            <span>Track 02 · Exploration</span>
            <h3>Explore unexplored resources</h3>
            <p>We help exploration companies select areas, secure licences and get teams on the ground.</p>
            <Link className="btn btn--outline-light" to="/contact?interest=explore">
              Start exploring <Arrow />
            </Link>
          </div>
        </div>
        <p className="partner__foot rv">
          Prefer to talk? Call {contact.director} on <a href={contact.phoneHref}>{contact.phone}</a> or message on{' '}
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      </div>
    </section>
  );
}
