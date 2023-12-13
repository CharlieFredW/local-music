import React from 'react';

import dynamic from 'next/dynamic';

// Import your component dynamically
const GlobeComponent = dynamic(() => import('./components/globeComponent'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* Render the World component within a div */}
      <div className="w-full h-full">
        <GlobeComponent/>
      </div>
    </div>
  );
};

export default HomePage;
