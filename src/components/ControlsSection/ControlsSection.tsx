import React, { FunctionComponent } from 'react';
import LocationSelector from '../LocationSelector';
import TemperatureToggle from '../TemperatureToggle';
import { TemperatureUnit, Location } from '../../sharedTypes';
import './ControlsSection.css';

interface ControlsSectionProps {
  selectedLocation: Location;
  selectedTemperatureUnit: TemperatureUnit;
  onTemperatureToggle: (unit: TemperatureUnit) => void;
  onLocationChange: (location: Location) => void;
}

const ControlsSection: FunctionComponent<ControlsSectionProps> = ({
  selectedLocation,
  selectedTemperatureUnit,
  onTemperatureToggle,
  onLocationChange,
}) => (
  <section className="controls-section">
    <LocationSelector
      value={selectedLocation}
      onChange={onLocationChange}
    />
    <TemperatureToggle
      value={selectedTemperatureUnit}
      onToggle={onTemperatureToggle}
    />
  </section>
);

export default ControlsSection;
