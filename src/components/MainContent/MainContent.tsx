import React, { FunctionComponent, useState } from 'react';
import LocationSelector from '../LocationSelector';
import TemperatureToggle from '../TemperatureToggle';
import { TemperatureUnit, Location } from '../../sharedTypes';
import useOpenWeatherQuery from '../../hooks/useOpenWeather';
import './MainContent.css';

const MainContent: FunctionComponent = () => {
  const [location, setLocation] = useState<Location>('lisbon');
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  const {
    data,
    error,
    loading,
  } = useOpenWeatherQuery({ location, temperatureUnit });

  return (
    <main className="main-content">
      <section className="controls-section">
        <LocationSelector
          value={location}
          onChange={(event) => {
            const value = event.target.value as Location;
            setLocation(value);
          }}
        />
        <TemperatureToggle
          value={temperatureUnit}
          onToggle={setTemperatureUnit}
        />
      </section>
      <section className="data-display-section">
        {loading && <p>loading...</p>}
        {(error || !data) && (
          <>
            <p>Something went wrong...</p>
            {error && <p>{error.message}</p>}
          </>
        )}
      </section>
    </main>
  );
};

export default MainContent;
