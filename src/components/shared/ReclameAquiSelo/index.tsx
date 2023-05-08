// React
import React, { useEffect } from 'react';

const ReclameAquiSelo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'ra-embed-reputation';
    script.src = 'https://s3.amazonaws.com/raichu-beta/selos/bundle.js';
    script.setAttribute(
      'data-id',
      'MTAxNjc6Y29uc29yY2lvLW5hY2lvbmFsLXRyYWRpY2Fv'
    );
    script.setAttribute('data-target', 'reputation-ra');
    script.setAttribute('data-model', '2');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="reputation-ra"></div>;
};

export default ReclameAquiSelo;
