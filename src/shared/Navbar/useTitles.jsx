import { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(() => {
    document.title = `Top Fashions ${title} `;
  });
};

export default useTitles;
