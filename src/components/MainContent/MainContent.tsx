import React, { FunctionComponent, useState } from 'react';
import LocationSelector from '../LocationSelector';
import './MainContent.scss';

const MainContent: FunctionComponent = () => {
  const [location, setLocation] = useState<string>('lisbon');

  return (
    <main className="main-content">
      <LocationSelector
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
    </main>
  );
};

export default MainContent;
