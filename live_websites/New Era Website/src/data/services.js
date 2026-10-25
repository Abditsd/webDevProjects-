// track: 'invest' | 'explore' | 'both' | 'oil'
export const services = [
  {
    slug: 'investor-matchmaking',
    title: 'Investor Matchmaking',
    icon: 'chart',
    track: 'invest',
    summary: 'We match investors with proven deposits and licence holders in Somaliland, and structure the first conversations so both sides can move quickly.',
    tags: ['Deal sourcing', 'Introductions', 'Term-sheet support'],
  },
  {
    slug: 'due-diligence',
    title: 'Due Diligence & Geological Data Review',
    icon: 'search',
    track: 'both',
    summary: 'Independent review of licences, geological reports, samples and historic data, so you know what is really in the ground before you commit.',
    tags: ['Licence checks', 'Data review', 'Red-flag reports'],
  },
  {
    slug: 'licensing',
    title: 'Government Liaison & Licensing',
    icon: 'doc',
    track: 'both',
    summary: 'Exploration and mining licence applications, renewals and transfers, coordinated with the Ministry of Energy & Minerals and regional authorities.',
    tags: ['Ministry liaison', 'Licence applications', 'Compliance'],
  },
  {
    slug: 'site-visits',
    title: 'Site Visits & Logistics',
    icon: 'pin',
    track: 'both',
    summary: 'Planned field visits to deposits and exploration areas: travel, permits, transport, accommodation and local guides arranged for you.',
    tags: ['Field visits', 'Travel & permits', 'Local guides'],
  },
  {
    slug: 'local-partners',
    title: 'Local Partner & Joint-Venture Setup',
    icon: 'coin',
    track: 'both',
    summary: 'Vetting and introducing reliable local partners, and supporting company registration and joint-venture agreements.',
    tags: ['Partner vetting', 'Company setup', 'JV agreements'],
  },
  {
    slug: 'community-esg',
    title: 'Community & ESG Engagement',
    icon: 'leaf',
    track: 'both',
    summary: 'Early, respectful engagement with communities and elders, and environmental and social planning aligned with international standards.',
    tags: ['Community relations', 'ESG planning', 'Social licence'],
  },
  {
    slug: 'security-logistics',
    title: 'Security & Logistics Coordination',
    icon: 'shield',
    track: 'explore',
    summary: 'Coordination of security, equipment movement and supply for exploration programmes, including import through the Port of Berbera.',
    tags: ['Security planning', 'Equipment import', 'Supply chain'],
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas Upstream Facilitation',
    icon: 'drop',
    track: 'oil',
    summary: 'Support for upstream companies interested in Somaliland blocks: government engagement, partner introductions and in-country operations support.',
    tags: ['Block interest', 'Government engagement', 'In-country support'],
  },
];

export const trackLabel = {
  invest: 'Investors',
  explore: 'Exploration',
  both: 'Investors & exploration',
  oil: 'Oil & gas',
};
