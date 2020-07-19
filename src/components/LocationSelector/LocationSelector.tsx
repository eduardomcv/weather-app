import React, { FunctionComponent, ChangeEventHandler } from 'react';
import { Location } from '../../sharedTypes';
import './LocationSelector.css';

interface LocationSelectorProps {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: Location;
}

const LocationSelector: FunctionComponent<LocationSelectorProps> = ({ onChange, value }) => (
  <select
    className="location-selector"
    onChange={onChange}
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
