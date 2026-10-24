import drillCoreImg from '../assets/drill-core.jpg';
import explorationDuskImg from '../assets/exploration-dusk.jpg';
import geologicalMapImg from '../assets/geological-map.jpg';
import heroMineImg from '../assets/hero-mine.jpg';
import oreGoldImg from '../assets/ore-gold.jpg';
import somalilandMapSvg from '../assets/somaliland-map.svg';

// Placeholder editorial content. Replace with real articles before launch.
export const insights = [
  {
    slug: 'berbera-corridor-logistics-mining',
    category: 'Logistics',
    readTime: '5 min read',
    date: '2026-08-27',
    image: somalilandMapSvg,
    imageAlt: 'Stylised map of Somaliland showing Berbera, Hargeisa and the corridor to Ethiopia.',
    title: 'Berbera Corridor: logistics for mining investors',
    excerpt: 'How the port and the road corridor to Ethiopia change the economics of moving equipment in and product out.',
    body: [
      'For any mining or exploration project, logistics can decide whether a deposit is economic. The Port of Berbera, on the Gulf of Aden, gives Somaliland a deep-water gateway close to major shipping lanes.',
      'The Berbera Corridor links the port to Hargeisa and onwards to Ethiopia, opening a route for equipment imports and for bulk exports such as gypsum and industrial minerals.',
      'NEW ERA coordinates equipment import, customs and in-country transport for clients, so field programmes start on time and within budget.',
    ],
  },
  {
    slug: 'somaliland-gold-exploration-interest',
    category: 'Gold',
    readTime: '6 min read',
    date: '2026-09-18',
    image: oreGoldImg,
    imageAlt: 'Gold veining in host rock.',
    title: "Why Somaliland's gold potential is attracting exploration interest",
    excerpt: 'Reported occurrences, limited modern exploration and a growing investment framework are putting Somaliland on exploration shortlists.',
    body: [
      'Gold has been reported across several regions of Somaliland, yet much of the country has never seen systematic, modern exploration. For exploration companies, that combination of indications and open ground is the starting point of every new district.',
      'Investors increasingly ask the same early questions: what data already exists, who holds the licences, and how quickly can a team get on the ground? Answering them well depends on local knowledge as much as geology.',
      'NEW ERA helps exploration companies assess historic data, identify available areas and prepare licence applications, while coordinating logistics and community engagement from day one.',
    ],
  },
  {
    slug: 'understanding-mineral-licensing-somaliland',
    category: 'Licensing',
    readTime: '7 min read',
    date: '2026-07-30',
    image: geologicalMapImg,
    imageAlt: 'Geological survey map with contour lines and drill collars.',
    title: 'Understanding mineral licensing in Somaliland',
    excerpt: 'Exploration and mining licences, the role of the Ministry and what investors should prepare.',
    body: [
      'Mineral rights in Somaliland are administered by the Ministry of Energy & Minerals. Investors and exploration companies typically move from an exploration licence to a mining licence as projects advance.',
      'A well-prepared application includes a clear work programme, evidence of technical and financial capability, and an approach to community engagement and environmental management.',
      'NEW ERA supports clients through application, follow-up and renewal, and checks the licence history of any asset before an investment is made.',
    ],
  },
  {
    slug: 'gypsum-near-berbera',
    category: 'Industrial minerals',
    readTime: '4 min read',
    date: '2026-06-12',
    image: drillCoreImg,
    imageAlt: 'Rows of drill core samples in a core tray.',
    title: 'Gypsum near Berbera: an industrial-minerals opportunity',
    excerpt: 'Large gypsum deposits close to a port make a straightforward case for regional construction markets.',
    body: [
      'Somaliland is widely reported to host large gypsum deposits, notably in the area around Berbera. Proximity to the port is a major advantage for a bulk, lower-value commodity.',
      'Demand from cement and construction markets across the region creates a practical route to development for investors with the right partners.',
    ],
  },
  {
    slug: 'oil-gas-blocks-somaliland',
    category: 'Oil & gas',
    readTime: '6 min read',
    date: '2026-05-21',
    image: explorationDuskImg,
    imageAlt: 'Exploration rig silhouetted against hills at dusk.',
    title: 'Oil & gas in Somaliland: what upstream companies should know',
    excerpt: 'Onshore exploration activity has renewed interest in Somaliland’s petroleum potential.',
    body: [
      'Onshore blocks in Somaliland have seen exploration activity in recent years, renewing interest in the country’s petroleum potential.',
      'Upstream companies considering acreage need clear government engagement, reliable local partners and practical support for field operations. NEW ERA facilitates each of these.',
    ],
  },
  {
    slug: 'proven-deposit-checklist',
    category: 'Investors',
    readTime: '5 min read',
    date: '2026-04-09',
    image: heroMineImg,
    imageAlt: 'Open-pit mine with excavators and haul trucks at golden hour.',
    title: 'Investing in a proven deposit: a practical checklist',
    excerpt: 'Seven questions to answer before you invest in a discovered deposit in Somaliland.',
    body: [
      'Who holds the licence, and is its history clean? What data supports the deposit, and has it been independently reviewed? Are the communities around the site informed and supportive?',
      'These questions sound simple, but answering them on the ground takes time and relationships. NEW ERA works through them with investors before any commitment is made.',
    ],
  },
];

export const findInsight = (slug) => insights.find((a) => a.slug === slug);

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
