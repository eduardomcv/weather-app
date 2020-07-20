import React, { FunctionComponent } from 'react';
import { Location } from '../../sharedTypes';
import './LocationSelector.css';

interface LocationSelectorProps {
  onChange: (location: Location) => void;
  value: Location;
}

const LocationSelector: FunctionComponent<LocationSelectorProps> = ({ onChange, value }) => (
  <select
    className="location-selector"
    onChange={(event) => onChange(event.target.value as Location)}
    value={value}
  >
    <option value="london">
      London
    </option>
    <option value="newyork">
      New York
    </option>
    <option value="lisbon">
      Lisbon
    </option>
  </select>
);

export default LocationSelector;
