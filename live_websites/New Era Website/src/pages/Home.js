import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';
import HomeHero from '../components/HomeHero.js';
import TwoTracks from '../components/TwoTracks.js';
import WhySomaliland from '../components/WhySomaliland.js';
import ServicesSection from '../components/ServicesSection.js';
import SectorsTable from '../components/SectorsTable.js';
import AboutSection from '../components/AboutSection.js';
import { InsightList } from '../components/InsightCards.js';
import PartnerBand from '../components/PartnerBand.js';
import { Arrow } from '../components/Icons.js';
import { insights } from '../data/insights.js';

export default function Home() {
  useTitle(null);
  return (
    <>
      <HomeHero />
      <TwoTracks />
      <WhySomaliland />
      <ServicesSection condensed />
      <SectorsTable alt compact />
      <AboutSection condensed />
      <section className="sec alt" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow rv">Insights</p>
              <h2 className="sec-title rv" data-d="1" id="insights-title">
                Notes on <em>Somaliland’s</em> resources.
              </h2>
            </div>
            <Link className="link-arrow rv" data-d="2" to="/insights">
              All insights <Arrow />
            </Link>
          </div>
          <InsightList posts={insights.slice(0, 3)} />
        </div>
      </section>
      <PartnerBand />
    </>
  );
}
