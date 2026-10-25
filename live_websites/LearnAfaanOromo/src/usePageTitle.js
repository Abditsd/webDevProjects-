import { useEffect } from 'react';

const SITE_NAME = 'Afaan Oromo with Abdullah';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);
};

export default usePageTitle;
