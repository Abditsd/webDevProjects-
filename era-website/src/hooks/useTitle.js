import { useEffect } from 'react';

const BASE = 'NEW ERA Investment';

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Somaliland Minerals, Gold and Oil & Gas`;
  }, [title]);
}
