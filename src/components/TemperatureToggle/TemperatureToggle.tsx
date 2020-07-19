import React, { FunctionComponent, ChangeEventHandler } from 'react';
import { TemperatureUnit } from '../../sharedTypes';
import './TemperatureToggle.css';

interface TemperatureToggleProps {
  value: TemperatureUnit;
  onToggle: (unit: TemperatureUnit) => void;
}

const TemperatureToggle: FunctionComponent<TemperatureToggleProps> = ({
  value,
  onToggle,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;

    const unit: TemperatureUnit = checked ? 'farenheit' : 'celsius';

    onToggle(unit);
  };

  return (
    <div className="container">
      <span>°C</span>
      <label
        htmlFor="slider-checkbox"
        className="switch"
      >
        <input
          id="slider-checkbox"
          type="checkbox"
          checked={value === 'farenheit'}
          onChange={handleChange}
        />
        <span className="slider" />
      </label>
      <span>°F</span>
    </div>
  );
};

export default TemperatureToggle;
