import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import AboutSection from '../components/AboutSection.js';
import PartnerBand from '../components/PartnerBand.js';
import heroMineImg from '../assets/hero-mine.jpg';

export default function About() {
  useTitle('About');
  return (
    <>
      <PageHero
        eyebrow="About NEW ERA"
        title={<>Local knowledge for <em>international</em> investors.</>}
        lede="A Somaliland-based consultancy connecting investors and exploration companies with the country’s minerals, gold and oil & gas."
        image={heroMineImg}
        imageAlt="Open-pit mine with excavators and haul trucks at golden hour."
        position="55% 40%"
        crumbs={[{ label: 'About' }]}
      />
      <AboutSection />
      <PartnerBand />
    </>
  );
}
