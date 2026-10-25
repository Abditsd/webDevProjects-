import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import ServicesSection from '../components/ServicesSection.js';
import PartnerBand from '../components/PartnerBand.js';
import { services } from '../data/services.js';
import drillCoreImg from '../assets/drill-core.jpg';

export default function Services() {
  useTitle('Services');
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Facilitation from <em>enquiry</em> to operation.</>}
        lede="Investor matchmaking, licensing, due diligence, partners, community relations and logistics, delivered by one Somaliland-based team."
        image={drillCoreImg}
        imageAlt="Rows of drill core samples in a core tray."
        crumbs={[{ label: 'Services' }]}
      >
        <ul className="page-hero__index reveal-load d4" aria-label="Jump to a service">
          {services.map((s, i) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>
      <ServicesSection />
      <PartnerBand />
    </>
  );
}
