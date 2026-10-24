import { contact } from '../data/company.js';
import ContactForm from './ContactForm.js';

export default function ContactSection({ headingLevel = 'h2' }) {
  const H = headingLevel;
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div className="contact__info">
          <p className="eyebrow rv">Contact</p>
          <H className="sec-title rv" data-d="1" id="contact-title">
            Talk to us about <em>Somaliland</em>.
          </H>
          <p className="rv" data-d="2">
            Whether you want to invest in a proven deposit, explore new ground or discuss oil &amp; gas, tell us what you
            are looking for. We respond within two business days, in confidence.
          </p>
          <ul className="channels rv" data-d="3">
            <li>
              <span className="k">{contact.directorTitle}</span>
              <span>{contact.director}</span>
            </li>
            <li>
              <span className="k">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="k">Phone</span>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <span className="k">WhatsApp</span>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                {contact.whatsapp}
              </a>
            </li>
            <li>
              <span className="k">UK Office</span>
              <address>
                {contact.ukAddress.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li>
              <span className="k">Somaliland</span>
              <address>
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </address>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
