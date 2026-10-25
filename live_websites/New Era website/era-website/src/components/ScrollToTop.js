import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top on route change, or to the `#hash` target if present. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}
