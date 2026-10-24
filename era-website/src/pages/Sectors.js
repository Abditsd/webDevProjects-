import useTitle from '../hooks/useTitle.js';
import PageHero from '../components/PageHero.js';
import SectorsTable from '../components/SectorsTable.js';
import PartnerBand from '../components/PartnerBand.js';
import oreGoldImg from '../assets/ore-gold.jpg';

export default function Sectors() {
  useTitle('Sectors');
  return (
    <>
      <PageHero
        eyebrow="Sectors & commodities"
        title={<>Gold, minerals and <em>oil <span className="amp">&amp;</span> gas</em>.</>}
        lede="From gold and gemstones to gypsum, battery minerals and petroleum blocks: the opportunities we help companies access in Somaliland."
        image={oreGoldImg}
        imageAlt="Close-up of host rock with veins of gold and pale quartz."
        imageVariant="sectors"
        crumbs={[{ label: 'Sectors' }]}
      />
      <SectorsTable />
      <PartnerBand />
    </>
  );
}
