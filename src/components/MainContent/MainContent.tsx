import React, { FunctionComponent, useState } from 'react';
import { TemperatureUnit, Location } from '../../sharedTypes';
import ControlsSection from '../ControlsSection';
import DataSection from '../DataSection';
import './MainContent.css';

const MainContent: FunctionComponent = () => {
  const [location, setLocation] = useState<Location>('lisbon');
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  return (
    <main className="main-content">
      <ControlsSection
        selectedLocation={location}
        selectedTemperatureUnit={temperatureUnit}
        onLocationChange={setLocation}
        onTemperatureToggle={setTemperatureUnit}
      />
      <DataSection
        selectedLocation={location}
        selectedTemperatureUnit={temperatureUnit}
      />
    </main>
  );
};

export default MainContent;
