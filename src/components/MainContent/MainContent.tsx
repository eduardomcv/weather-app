import React, { FunctionComponent, useState, ChangeEventHandler } from 'react';
import LocationSelector from '../LocationSelector';
import TemperatureToggle from '../TemperatureToggle';
import { TemperatureUnit, Location } from '../../sharedTypes';
import './MainContent.css';

const MainContent: FunctionComponent = () => {
  const [location, setLocation] = useState<Location>('lisbon');
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  const handleLocationChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value as Location;
    setLocation(value);
  };

  return (
    <main className="main-content">
      <section className="controls-section">
        <LocationSelector
          value={location}
          onChange={handleLocationChange}
        />
        <TemperatureToggle
          value={temperatureUnit}
          onToggle={setTemperatureUnit}
        />
      </section>
    </main>
  );
};

export default MainContent;
