import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import ProcessLog from '../components/ProcessLog.js';
import PartnerBand from '../components/PartnerBand.js';
import explorationDuskImg from '../assets/exploration-dusk.jpg';

export default function Process() {
  useTitle('Process');
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={<>A clear, <em>five-step</em> facilitation journey.</>}
        lede="Enquiry, opportunity matching, site visit and due diligence, licensing and government liaison, then investment and ongoing support."
        image={explorationDuskImg}
        imageAlt="Exploration rig silhouetted against hills at dusk."
        position="30% 70%"
        crumbs={[{ label: 'Process' }]}
      />
      <ProcessLog />
      <PartnerBand />
    </>
  );
}
