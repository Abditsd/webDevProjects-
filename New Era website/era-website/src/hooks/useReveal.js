import { useEffect } from 'react';

/**
 * Reveals every `.rv` element inside `rootRef` (adds `.in`) once it has
 * entered the viewport — or been scrolled past, so fast scrolls and anchor
 * jumps never leave content hidden. Re-runs when `key` changes (the route
 * path), so each newly mounted page animates in.
 */
export default function useReveal(rootRef, key) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    let pending = Array.from(root.querySelectorAll('.rv:not(.in)'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      pending.forEach((el) => el.classList.add('in'));
      return undefined;
    }

    let raf = 0;
    const check = () => {
      raf = 0;
      const limit = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('in');
          return false;
        }
        return true;
      });
      if (!pending.length) stop();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    function stop() {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    raf = requestAnimationFrame(check);
    return () => {
      stop();
      cancelAnimationFrame(raf);
    };
  }, [rootRef, key]);
}
