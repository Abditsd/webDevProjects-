// status: 'known' (known occurrences / investor-ready) | 'explore' (exploration stage)
export const sectors = [
  { key: 'au', z: '79', weight: '196.97', symbol: 'Au', name: 'Gold', feature: true, status: 'known',
    text: 'Gold occurrences have been reported in several regions. Opportunities range from licensed prospects seeking investment to areas ready for systematic exploration.',
    meta: ['Prospects', 'Licensed areas', 'Exploration'] },
  { key: 'cu', z: '29', weight: '63.546', symbol: 'Cu', name: 'Copper', status: 'explore',
    text: 'Reported copper showings with potential for modern exploration.', meta: ['Base metals'] },
  { key: 'fe', z: '26', weight: '55.845', symbol: 'Fe', name: 'Iron ore', status: 'explore',
    text: 'Iron ore occurrences of interest for exploration and evaluation.', meta: ['Bulk commodity'] },
  { key: 'gm', z: 'Be', weight: 'Beryl · Corundum', symbol: 'Gm', name: 'Gemstones', status: 'known',
    text: 'Emerald, sapphire, aquamarine and garnet have been reported.', meta: ['Coloured stones'] },
  { key: 'gy', z: 'Ca', weight: 'CaSO₄·2H₂O', symbol: 'Gy', name: 'Gypsum & industrial', status: 'known',
    text: 'Large gypsum deposits, notably near Berbera, plus limestone.', meta: ['Construction', 'Export'] },
  { key: 'c', z: '06', weight: '12.011', symbol: 'C', name: 'Coal', status: 'explore',
    text: 'Coal occurrences with potential for local energy use.', meta: ['Energy minerals'] },
  { key: 'li', z: '03', weight: '6.94', symbol: 'Li', name: 'Battery minerals', status: 'explore',
    text: 'Early-stage potential for lithium and other battery and rare-earth minerals.', meta: ['Critical minerals'] },
  { key: 'og', z: 'C/H', weight: 'Hydrocarbons', symbol: 'O&G', name: 'Oil & gas', status: 'explore', wide: true,
    text: 'Onshore and offshore blocks with past and ongoing exploration interest. We support upstream companies with acreage, government engagement and operations.',
    meta: ['Upstream', 'Blocks', 'Government liaison'] },
];

export const statusLabel = { known: 'Known occurrences', explore: 'Exploration stage' };
