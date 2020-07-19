import React, { FunctionComponent, useState } from 'react';
import LocationSelector from '../LocationSelector';
import { TemperatureUnit, Location } from '../../sharedTypes';
import './MainContent.scss';

const MainContent: FunctionComponent = () => {
  const [location, setLocation] = useState<Location>('lisbon');
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  return (
    <main className="main-content">
      <LocationSelector
        value={location}
        onChange={(event) => {
          const value = event.target.value as Location;
          setLocation(value);
        }}
      />
    </main>
  );
};

export default MainContent;
