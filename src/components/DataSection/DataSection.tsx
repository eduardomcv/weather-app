import React, { FunctionComponent } from 'react';
import { TemperatureUnit, Location } from '../../sharedTypes';
import useOpenWeatherQuery from '../../hooks/useOpenWeather';
import './DataSection.css';
import { OPEN_WEATHER_ICONS_ENDPOINT } from '../../config';

const ICON_EXTENSION = '@2x.png';

interface DataSectionProps {
  selectedLocation: Location;
  selectedTemperatureUnit: TemperatureUnit;
}

const DataSection: FunctionComponent<DataSectionProps> = ({
  selectedLocation,
  selectedTemperatureUnit,
}) => {
  const {
    data,
    error,
    loading,
  } = useOpenWeatherQuery({
    location: selectedLocation,
    temperatureUnit: selectedTemperatureUnit,
  });

  if (loading) {
    return (
      <section className="data-section placeholder">
        <p>Loading...</p>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="data-section placeholder">
        <p>Something went wrong...</p>
        {error && <p>{error.message}</p>}
      </section>
    );
  }

  const { main, weather, sys } = data;

  const tempValue = main.temp.toFixed();
  const tempSymbol = selectedTemperatureUnit === 'celsius' ? '°C' : '°F';
  const weatherIcon = weather[0].icon; // first element is the "primary"

  // convert to UNIX timestamp with miliseconds
  const sunriseDate = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunsetDate = new Date(sys.sunset * 1000).toLocaleTimeString();

  return (
    <section className="data-section">
      <div className="temperature-display">
        <span>{`${tempValue} ${tempSymbol}`}</span>
        <img
          className="weather-icon"
          alt="weather-icon"
          src={`${OPEN_WEATHER_ICONS_ENDPOINT}${weatherIcon}${ICON_EXTENSION}`}
        />
      </div>
      <div className="day-cycle">
        <span>{`Sunrise: ${sunriseDate}`}</span>
        <span>{`Sunset: ${sunsetDate}`}</span>
      </div>
    </section>
  );
};

export default DataSection;
