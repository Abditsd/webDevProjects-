import { useEffect } from 'react';

// Elements that fade up as they scroll into view
const REVEAL_SELECTOR = '.section-title, .card, .reveal, .split > *';

const useScrollReveal = (pathname) => {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
};

export default useScrollReveal;
