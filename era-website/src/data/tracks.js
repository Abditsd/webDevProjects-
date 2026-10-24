import geologicalMapImg from '../assets/geological-map.jpg';
import oreGoldImg from '../assets/ore-gold.jpg';

export const tracks = [
  {
    key: 'invest',
    n: '01',
    label: 'For investors',
    title: 'Proven deposits',
    lead: 'Some of Somaliland’s minerals have already been found. We bring in investors to develop them, and manage the process end to end.',
    points: [
      'Introductions to licence holders and project owners',
      'Due diligence and geological data review',
      'Licensing with the Ministry of Energy & Minerals',
      'Local partners, community relations and logistics',
    ],
    cta: 'Invest in a proven deposit',
    image: oreGoldImg,
    imageAlt: 'Close-up of host rock with veins of gold and pale quartz.',
  },
  {
    key: 'explore',
    n: '02',
    label: 'For exploration companies',
    title: 'Unexplored resources',
    lead: 'Much of the country remains under-explored. We help exploration companies come to Somaliland, secure licences and invest in exploration.',
    points: [
      'Opportunity screening and area selection',
      'Exploration licence applications and renewals',
      'Field logistics, site access and security coordination',
      'Joint-venture and local partner setup',
    ],
    cta: 'Explore with us',
    image: geologicalMapImg,
    imageAlt: 'Geological survey map with rock units, contours and drill collars.',
  },
];

export const oilGas = {
  title: 'Oil & gas',
  text: 'Onshore and offshore blocks in Somaliland have attracted exploration interest. NEW ERA facilitates upstream companies seeking acreage, government engagement and in-country support.',
};
