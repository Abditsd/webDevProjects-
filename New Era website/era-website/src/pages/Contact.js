import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import ContactSection from '../components/ContactSection.js';

export default function Contact() {
  useTitle('Contact');
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title={<>Start a <em>confidential</em> conversation.</>}
        lede="Investors, exploration companies and upstream operators: tell us what you are looking for in Somaliland."
        crumbs={[{ label: 'Contact' }]}
      />
      <ContactSection />
    </>
  );
}
