import { contact, leadership } from '../data/company.js';
import { Phone, WhatsApp } from './Icons.js';

export default function LeaderCard() {
  const l = leadership[0];
  return (
    <article className="leader rv" aria-label={`${l.name}, ${l.role}`}>
      <div className="leader__avatar" aria-hidden="true">{l.initials}</div>
      <div>
        <span className="leader__role">{l.role}</span>
        <h3>{l.name}</h3>
        <p>{l.bio}</p>
        <div className="leader__actions">
          <a className="btn" href={contact.phoneHref}>
            <Phone /> {contact.phone}
          </a>
          <a className="btn btn--ghost" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            <WhatsApp /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
